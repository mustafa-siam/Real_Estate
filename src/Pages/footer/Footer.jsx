

const Footer = () => {
    return (
        <div>
            <footer className="footer md:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title text-2xl">HomeNest</h6>
    <p className="text-lg md:w-80">Lorem ipsum dolor sit, amet consec adipisicing elit. Sed nam ad repellendus voluptatem hic numquam quaerat nemo!</p>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;