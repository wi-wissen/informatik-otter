#!/usr/bin/env python3
"""Helpers for importing tasks from Informatik-Biber booklets (PDF).

Requires PyMuPDF:  pip install pymupdf

Commands (page numbers are 1-based, as printed in the booklet):
  info    PDF                          page count, license line, task overview page text
  text    PDF --pages 62-63            plain text of pages (layout preserved)
  render  PDF --page 62 --out p.png    render a full page (default 80 dpi) to look at it
  figures PDF --page 62 --out a.png    detect figure regions; prints JSON boxes and writes
                                       an annotated page image with numbered red boxes
  crop    PDF --page 62 --bbox x0,y0,x1,y1 --out img/basket-a.png [--scale 3] [--pad 2]
                                       render one region (PDF points) as PNG
  svg     PDF --page 62 --bbox x0,y0,x1,y1 --out img/graph.svg
                                       export one region as SVG (vector, keeps text as paths)
"""
import argparse
import json
import re
import sys

import pymupdf


def page_range(spec, n):
    a, _, b = spec.partition("-")
    a = int(a)
    b = int(b) if b else a
    return range(max(1, a), min(n, b) + 1)


def cmd_info(args):
    doc = pymupdf.open(args.pdf)
    print(f"pages: {doc.page_count}")
    lic = set()
    for p in doc:
        for line in p.get_text().splitlines():
            if re.search(r"Lizenz|licen[cs]e|Creative Commons|CC BY", line, re.I):
                lic.add(line.strip())
    print("license lines:", *sorted(lic)[:5], sep="\n  ")
    for i, p in enumerate(doc, 1):
        t = p.get_text()
        if re.search(r"Aufgabenliste|Aufgabenübersicht|Inhalt", t) and i < 12:
            print(f"\n--- overview candidate, page {i} ---\n{t}")


def cmd_text(args):
    doc = pymupdf.open(args.pdf)
    for i in page_range(args.pages, doc.page_count):
        print(f"\n===== page {i} =====")
        print(doc[i - 1].get_text("text", sort=True))


def cmd_render(args):
    doc = pymupdf.open(args.pdf)
    pix = doc[args.page - 1].get_pixmap(dpi=args.dpi)
    pix.save(args.out)
    print(args.out, pix.width, pix.height)


def merge_boxes(rects, gap):
    boxes = [pymupdf.Rect(r) for r in rects]
    changed = True
    while changed:
        changed = False
        out = []
        while boxes:
            b = boxes.pop()
            grown = pymupdf.Rect(b.x0 - gap, b.y0 - gap, b.x1 + gap, b.y1 + gap)
            i = 0
            while i < len(boxes):
                if grown.intersects(boxes[i]):
                    b |= boxes.pop(i)
                    grown = pymupdf.Rect(b.x0 - gap, b.y0 - gap, b.x1 + gap, b.y1 + gap)
                    changed = True
                else:
                    i += 1
            out.append(b)
        boxes = out
    return boxes


def cmd_figures(args):
    doc = pymupdf.open(args.pdf)
    page = doc[args.page - 1]
    area = page.rect.width * page.rect.height
    rects = []
    for d in page.get_drawings():
        r = d["rect"]
        if r.is_empty and (r.width < 0.5 and r.height < 0.5):
            continue
        if r.width * r.height > args.max_frac * area:
            continue  # backgrounds, solution boxes
        if r.width > 0.8 * page.rect.width and r.height < 3:
            continue  # rules / separators
        rects.append(r)
    for info in page.get_image_info():
        rects.append(pymupdf.Rect(info["bbox"]))
    boxes = [b for b in merge_boxes(rects, args.gap) if b.width >= args.min and b.height >= args.min]
    boxes.sort(key=lambda b: (round(b.y0 / 10), b.x0))
    result = [{"id": i + 1, "bbox": [round(b.x0, 1), round(b.y0, 1), round(b.x1, 1), round(b.y1, 1)]} for i, b in enumerate(boxes)]
    print("\n".join(json.dumps(r) for r in result))
    if args.out:
        shape = page.new_shape()
        for i, b in enumerate(boxes, 1):
            shape.draw_rect(b)
            shape.finish(color=(1, 0, 0), width=1)
            shape.insert_text((b.x0 + 1, b.y0 + 9), str(i), color=(1, 0, 0), fontsize=9)
        shape.commit()
        page.get_pixmap(dpi=args.dpi).save(args.out)
        print(args.out, file=sys.stderr)


def parse_bbox(s, pad):
    x0, y0, x1, y1 = (float(v) for v in s.split(","))
    return pymupdf.Rect(x0 - pad, y0 - pad, x1 + pad, y1 + pad)


def cmd_crop(args):
    doc = pymupdf.open(args.pdf)
    page = doc[args.page - 1]
    clip = parse_bbox(args.bbox, args.pad) & page.rect
    pix = page.get_pixmap(matrix=pymupdf.Matrix(args.scale, args.scale), clip=clip, alpha=args.alpha)
    pix.save(args.out)
    print(args.out, pix.width, pix.height)


def cmd_svg(args):
    doc = pymupdf.open(args.pdf)
    src = doc[args.page - 1]
    clip = parse_bbox(args.bbox, args.pad) & src.rect
    out = pymupdf.open()
    page = out.new_page(width=clip.width, height=clip.height)
    page.show_pdf_page(page.rect, doc, args.page - 1, clip=clip)
    with open(args.out, "w", encoding="utf-8") as f:
        f.write(page.get_svg_image(text_as_path=True))
    print(args.out)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("info"); s.add_argument("pdf"); s.set_defaults(fn=cmd_info)
    s = sub.add_parser("text"); s.add_argument("pdf"); s.add_argument("--pages", required=True); s.set_defaults(fn=cmd_text)
    s = sub.add_parser("render"); s.add_argument("pdf"); s.add_argument("--page", type=int, required=True)
    s.add_argument("--out", required=True); s.add_argument("--dpi", type=int, default=80); s.set_defaults(fn=cmd_render)
    s = sub.add_parser("figures"); s.add_argument("pdf"); s.add_argument("--page", type=int, required=True)
    s.add_argument("--out"); s.add_argument("--dpi", type=int, default=90)
    s.add_argument("--gap", type=float, default=6, help="merge distance in points")
    s.add_argument("--min", type=float, default=18, help="minimum box size in points")
    s.add_argument("--max-frac", type=float, default=0.12, help="ignore drawings larger than this page fraction")
    s.set_defaults(fn=cmd_figures)
    for name, fn in (("crop", cmd_crop), ("svg", cmd_svg)):
        s = sub.add_parser(name); s.add_argument("pdf"); s.add_argument("--page", type=int, required=True)
        s.add_argument("--bbox", required=True); s.add_argument("--out", required=True)
        s.add_argument("--pad", type=float, default=2)
        if name == "crop":
            s.add_argument("--scale", type=float, default=3); s.add_argument("--alpha", action="store_true")
        s.set_defaults(fn=fn)
    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
