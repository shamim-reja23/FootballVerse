import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <Link
            to="/"
            className="text-2xl font-extrabold text-primary"
          >
            FootballVerse
          </Link>

          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Your destination for football news, match updates, competitions,
            and in-depth articles from around the world.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>

          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>

          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>

          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FootballVerse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;