from cairosvg import svg2png
from PIL import Image
from pathlib import Path

root = Path(__file__).resolve().parent.parent
svg_path = root / 'public' / 'favicon.svg'
out_dir = root / 'public' / 'icons'
out_dir.mkdir(parents=True, exist_ok=True)

sizes = [32, 64, 128, 180, 192, 512]
for size in sizes:
    png_path = out_dir / f'favicon-{size}.png'
    svg2png(url=str(svg_path), write_to=str(png_path), output_width=size, output_height=size)

ico_path = root / 'public' / 'favicon.ico'
img = Image.open(out_dir / 'favicon-512.png').convert('RGBA')
img.save(ico_path, format='ICO', sizes=[(32, 32), (64, 64), (128, 128), (256, 256), (512, 512)])

print('Created favicon PNGs in', out_dir)
print('Created ICO at', ico_path)
