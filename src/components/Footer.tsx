export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-site px-5 py-10 text-center">
        <p className="font-mono text-[12px] tracking-[0.15em] text-muted">
          *** END OF TRANSACTION ***
        </p>
        <p className="mt-2 font-mono text-[12px] text-muted/70">
          THANK YOU — PLEASE RETAIN THIS RECEIPT
        </p>
        <p className="mt-6 text-[13px] text-muted">
          © {new Date().getFullYear()} Ihsan Dzahri · Built with React, TypeScript &
          Spring Boot
        </p>
      </div>
    </footer>
  )
}
