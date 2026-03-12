
function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          © 2024 DivFixer. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#booking" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
