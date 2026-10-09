/* Closing block, like the end of a document: a rule, two plain columns,
   and the copyright centred where a page number would sit. */
export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-ink pt-6 pb-10 text-[0.88em] sm:mt-28">
      <div className="flex flex-col justify-between gap-6 sm:flex-row">
        <div>
          <span className="block font-bold">Josua Kiviranta</span>
          <span className="block tracking-[0.06em]">ADVISOR AND ENGINEER</span>
        </div>

        <div className="sm:text-right">
          <span className="block tracking-[0.06em]">SOCIALS</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="doc-link tracking-[0.06em]"
            href="https://www.linkedin.com/in/josuakiviranta/"
          >
            LINKEDIN
          </a>
        </div>
      </div>

      <p className="mt-12 text-center">© 2026 Josua Kiviranta</p>
    </footer>
  );
};
