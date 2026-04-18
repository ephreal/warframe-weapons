import "./Help.css";
import { openUrl } from '@tauri-apps/plugin-opener';

const Help = () => {
    return (
        <div className="tab-pane help-page" role="tabpanel" id="help">
            {/* Header */}
            <div className="help-header px-4 py-3 mb-0">
                <div className="d-flex align-items-center gap-2 mb-1">
                    <div className="help-accent-bar" />
                    <h1 className="help-title m-0">Guide</h1>
                </div>
                <p className="text-secondary ms-3 mb-0 small">
                    A quickstart guide to efficient Lich, Sister, and Coda completion. For full details, consult the{" "}
                    <a href="https://wiki.warframe.com" target="_blank" className="help-link">
                        Warframe Wiki ↗
                    </a>
                </p>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <nav className="col-md-3 d-none d-md-block help-sidebar py-4 px-3">
                        <p className="help-sidebar-label">External Links</p>
                        {[
                            { href: "https://wiki.warframe.com/w/Kuva_Lich", label: "Kuva Lich" },
                            { href: "https://wiki.warframe.com/w/Sisters_of_Parvos", label: "Sisters of Parvos" },
                            { href: "https://wiki.warframe.com/w/Technocyte_Coda", label: "Technocyte Coda" },
                            { href: "https://wiki.warframe.com/w/Valence_Fusion", label: "Valence Fusion" },
                        ].map((link) => (
                            // <a key={link.href} href={link.href} target="_blank" className="d-block help-ext-link mb-1 small">
                            <a 
                                key={link.href}
                                href="#"
                                className="d-block help-ext-link mb-1 small"
                                onClick={(e) => {e.preventDefault; openUrl(link.href);}}
                            >
                                ↗ {link.label}
                            </a>
                        ))}

                        <hr className="help-divider my-3" />

                        <p className="help-sidebar-label">Contents</p>
                        {[
                            { href: "#general-process", label: "General Process", children: [
                                { href: "#general-process-strategies", label: "General Strategies" },
                                { href: "#general-process-strategies-lich", label: "Lich / Sister Strategy" },
                                { href: "#general-process-strategies-coda", label: "Coda Strategy" },
                                { href: "#general-requiem-mods", label: "Requiem Mods" },
                            ]},
                            { href: "#kuva-lich", label: "Kuva Lich" },
                            { href: "#sister-of-parvos", label: "Sister of Parvos" },
                            { href: "#technocyte-coda", label: "Technocyte Coda" },
                            { href: "#valence-bonus", label: "Valence Bonus & Fusion" },
                        ].map((item) => (
                            <div key={item.href}>
                                <a href={item.href} className="d-block help-toc-link py-1 small">
                                    {item.label}
                                </a>
                                {"children" in item && item.children?.map((child) => (
                                    <a key={child.href} href={child.href} className="d-block help-toc-child py-1 small ps-3">
                                        {child.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </nav>

                    {/* Main content */}
                    <main className="col-md-9 py-4 px-4">

                        <HelpSection id="general-process" title="General Process">
                            <p>To start, you need an Adversary: a Lich for Kuva weapons, a Sister of Parvos for Tenet weapons, or a Technocyte Coda for Coda weapons.</p>
                            <p>Once acquired, your adversary takes over part of the star chart. Run those missions until they appear, then stab them to gather intel. Eventually they flee to a Railjack mission.</p>
                            <p>Defeat them there to choose: <span className="help-gold fw-semibold">Vanquish</span> (claim their weapon) or <span className="help-blue fw-semibold">Convert</span> (trade them or add them to your Railjack crew).</p>
                        </HelpSection>

                        <HelpSection id="general-process-strategies" title="General Strategies" level={2}>
                            <p>For a <span className="help-gold fw-semibold">Lich or Sister</span>, gather as much information as possible before each stab. Always have a known <a href="#general-requiem-mods" className="help-link">Requiem Mod</a> equipped on your Parazon.</p>
                            <p>For a <span className="help-blue fw-semibold">Technocyte Coda</span>, you need antivirus mods. Place all unknown antivirus mods on your Parazon for the first few stabs to quickly identify the correct one.</p>
                        </HelpSection>

                        <HelpSection id="general-process-strategies-lich" title="Lich / Sister of Parvos Strategy" level={2}>
                            <p>The most efficient strategy requires at most 4 secret mercy attempts. Never stab with no Requiem Mods equipped or with a mod known to be in the wrong slot.</p>
                            <HelpSteps items={[
                                "Farm Thralls / Hounds to fill your knowledge meter",
                                "Learn a Requiem mod when the meter fills",
                                "Place that Requiem in slot 1 of your Parazon",
                                "Perform ONE secret mercy on your Adversary",
                                "Adjust your Parazon order based on the result",
                                "Repeat until all three Requiems are confirmed",
                            ]} />
                            <p>Killing Thralls or Hounds fills a circular meter. When full, you learn one of the three Requiems your adversary carries. Once you know all three, you are at most 1–2 attempts from finishing.</p>
                            <HelpInfoBox>
                                <span className="fw-semibold">Example:</span> You learn Xata, Netra, and Jahu in that order. If Xata (slot 1) and Netra (slot 2) were both correct, place Jahu in slot 3 and you're done on the next encounter. Adjust placement based on any failures along the way.
                            </HelpInfoBox>
                        </HelpSection>

                        <HelpSection id="general-process-strategies-coda" title="Technocyte Coda Strategy" level={2}>
                            <p>Acquire one of every Antivirus mod (from 1999 bounties or trading). Place three randomly on your Parazon.</p>
                            <p>In 1999 missions your Coda may spawn — defeat and stab them. Once a mod is confirmed correct, remove all others and add potency mods to speed things up. Continue until they flee to Earth Proxima.</p>
                        </HelpSection>

                        <HelpSection id="general-requiem-mods" title="Requiem Mods" level={2}>
                            <p>Requiem mods are required to finish Liches and Sisters of Parvos. They come from Requiem Relics, which drop from:</p>
                            <HelpSteps ordered={false} items={[
                                "Secret Mercy on Lich Thralls",
                                "Secret Mercy on Sister Hounds",
                                "Kuva Siphon Missions",
                            ]} />
                            <p>Crack Requiem Relics in void fissure missions at the Kuva Fortress to earn Requiem mods.</p>
                            <HelpInfoBox>
                                <span className="fw-semibold">Tip:</span> Play on <span className="fw-semibold">Public</span> — other players running relics give you more chances at the mods you need. Requiem mods are also tradeable if you'd rather spend Platinum.
                            </HelpInfoBox>
                        </HelpSection>

                        <hr className="help-divider my-4" />

                        <HelpSection id="kuva-lich" title="Kuva Lich">
                            <p>To get a Lich, defeat a <span className="help-gold fw-semibold">Lich Larvaling</span>. These spawn on Grineer missions level 20+. The recommended spot is <span className="fw-semibold">Cassini, Saturn</span> (solo).</p>
                            <p>During the mission, the lights will flicker — kill as many enemies as possible. A marker will appear on your HUD; kill that enemy. It will kneel like a capture target.</p>
                            <p>Approach and wait for the weapon panel. If it's the weapon you want, <span className="fw-semibold">hold X</span> to spawn your Lich. If not, leave the mission to remove it from the rotation.</p>
                            <p>Once you have a Lich, follow <a href="#general-process-strategies-lich" className="help-link">the general Lich/Sister strategy</a>.</p>
                        </HelpSection>

                        <HelpSection id="sister-of-parvos" title="Sister of Parvos">
                            <p>To get a Sister, defeat a <span className="help-blue fw-semibold">Sister of Parvos Candidate</span>. These spawn on Corpus missions level 20+ after clearing the Granum Void with a Zenith Granum Crown (Rank 1 rewards minimum). Recommended: <span className="fw-semibold">Hydra, Pluto</span> (solo).</p>
                            <p>After the Granum Void, a Candidate spawns. Defeat them, check the weapon panel, and <span className="fw-semibold">hold X</span> if it's the weapon you want. Otherwise leave to remove it from rotation.</p>
                            <p>Once you have a Sister, follow <a href="#general-process-strategies-lich" className="help-link">the general Lich/Sister strategy</a>.</p>
                        </HelpSection>

                        <HelpSection id="technocyte-coda" title="Technocyte Coda">
                            <p>Run 1999 missions until you find a <span className="help-gold fw-semibold">Mixtape</span> (drops from enemies). Bring it to a terminal and complete the hacking minigame to spawn your Technocyte Coda.</p>
                            <p>Defeat it following <a href="#general-process-strategies-coda" className="help-link">the general Coda strategy</a>. Afterwards, purchase Coda weapons from <span className="fw-semibold">Eleanor</span> using Live Heartcells.</p>
                        </HelpSection>

                        <HelpSection id="valence-bonus" title="Valence Bonus & Fusion">
                            <p>A <span className="help-gold fw-semibold">Valence Bonus</span> is an elemental damage bonus on Kuva, Tenet, or Coda weapons, ranging from <span className="fw-semibold">25%</span> to <span className="fw-semibold">60%</span>. Higher is better. For Tenet and Sister weapons, the element is set by the Warframe used to stab the larvaling or candidate.</p>
                            <p>Fuse duplicate weapons via <span className="fw-semibold">Valence Fusion</span>: Arsenal → Modding screen → Actions → Valence Fusion. Choose which element to keep and confirm.</p>

                            <p className="help-table-label small mt-3 mb-1">Fusions required to reach 60%</p>
                            <table className="table table-sm table-striped help-table">
                                <thead>
                                    <tr>
                                        <th>Minimum Initial Value</th>
                                        <th>Max Fusions Needed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["58.0%", "0 (auto-rounded to 60%)"],
                                        ["52.8%", "1"],
                                        ["48.0%", "2"],
                                        ["43.6%", "3"],
                                        ["39.7%", "4"],
                                        ["36.1%", "5"],
                                        ["32.8%", "6"],
                                        ["29.8%", "7"],
                                        ["27.1%", "8"],
                                        ["25.0%", "9"],
                                    ].map(([val, fusions], i) => (
                                        <tr key={i}>
                                            <td className="help-gold">{val}</td>
                                            <td>{fusions}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </HelpSection>

                    </main>
                </div>
            </div>
        </div>
    );
};



const HelpSection = ({
    id, title, level = 1, children,
}: {
    id: string; title: string; level?: 1 | 2; children: React.ReactNode;
}) => (
    <section id={id} className="mb-4">
        {level === 1
            ? <h2 className="help-section-title">{title}</h2>
            : <h3 className="help-subsection-title"><span className="help-gold me-2">▸</span>{title}</h3>
        }
        <div className="help-section-body">{children}</div>
    </section>
);

const HelpSteps = ({ items, ordered = true }: { items: string[]; ordered?: boolean }) => {
    const Tag = ordered ? "ol" : "ul";
    return (
        <Tag className="help-steps small mb-3">
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </Tag>
    );
};

const HelpInfoBox = ({ children }: { children: React.ReactNode }) => (
    <div className="help-infobox small mb-3">{children}</div>
);

export default Help;