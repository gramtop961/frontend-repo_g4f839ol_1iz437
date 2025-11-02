function Footer() {
  return (
    <footer id="about" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} LoadWatch. All rights reserved.</p>
        <p>
          Built with a minimalist, interactive loading theme using a 3D scene.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
