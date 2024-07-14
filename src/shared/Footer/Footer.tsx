const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-backgroundLightGreen text-textGreen p-10">
                <aside>
                    <img className="my-6" src="https://i.ibb.co/ctWbgxN/logo.png" alt="" />
                    <p className="font-bold">
                        Plants Industries Ltd.
                        <br />
                        Providing reliable plant service since 1992
                    </p>
                    <p>
                        Copyright © ${new Date().getFullYear()} - All right
                        reserved
                    </p>
                </aside>
              
            </footer>
        </div>
    );
};

export default Footer;
