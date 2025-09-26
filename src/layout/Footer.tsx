import { FaGithub } from "react-icons/fa6";
import Logo from "./logo/Logo";

export default function Footer({ withMenu = true }: { withMenu?: boolean }) {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-surface text-foreground py-6 px-4 border-t border-border">
            <div className="container mx-auto max-w-7xl">
                {withMenu && (
                  <div className="border-b border-border mb-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <Logo size="md" showTitle={true} />
                            <p className="text-muted text-sm">Snap, Track, Explore.</p>
                        </div>

                        {/* <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Demo</a></li>
                </ul>
            </div> */}

                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-muted">
                                <li><a href="https://github.com/snapiter" className="hover:text-foreground transition-colors">GitHub</a></li>
                                {/* <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li> */}
                                {/* <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li> */}
                            </ul>
                        </div>
                        {/*           
            <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                </ul>
                    </div> */}
                    </div>
                </div>
                )}

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-muted text-sm">
                            © {year}&nbsp;
                            <a
                                href="https://snapiter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-foreground transition-colors"
                            >SnapIter
                            </a>
                            . Licensed under the{" "}
                            <a
                                href="https://www.apache.org/licenses/LICENSE-2.0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-foreground transition-colors"
                            >
                                Apache License 2.0
                            </a>
                            .
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/snapiter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-foreground transition-colors"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
            </div>
        </footer>
    );
}