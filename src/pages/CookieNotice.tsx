import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import "../components/css/cookieNotice.css";
import PageMainHeading from "../components/PageTemplate/PageMainHeading";
import { TabelData } from "../data/data";

const CookieNotice = () => {
    return (
        <PageTemplate>
            <PageMainHeading title="Cookie Notice" />
            <div className="cookie-page-content">
                <p>
                    {" "}
                    <span>Introduction</span>
                </p>
                <p>
                    PLEASE READ THE FOLLOWING TERMS AND CONDITIONS CAREFULLY.
                    The www.lifesyncnow.com Web site (the “Web Site” or
                    “www.lifesyncnow.com”) is provided by Well + GoodNYC (“Well
                    + Good”) and/or its affiliates and subsidiaries for your and
                    others’ personal, non-commercial enjoyment, subject to the
                    terms of these terms and conditions of use and all
                    modifications thereto (“Terms and Conditions”), and the
                    rules that may be published from time to time by
                    LIFESYNCNOW. By using this site, you are deemed to have
                    agreed to these terms and conditions of use. LIFESYNCNOW may
                    change the Terms and Conditions from time to time and at any
                    time, and without actual notice to you. All such changes to
                    these Terms and Conditions will appear on
                    www.lifesyncnow.com. By using this site after we post any
                    changes, you agree to accept those changes, whether or not
                    you have reviewed them. If at any time you choose not to
                    accept these Terms and Conditions of use, please do not use
                    this site.
                </p>
                <p>
                    {" "}
                    <span>What Are Trackers?</span>
                </p>
                <p>
                    We use a variety of trackers; six of the main types are
                    explained below. This list is intended to include all the
                    types that we use, although these types may vary depending
                    on the use of our websites and of our mobile phone
                    applications.
                </p>
                <p>
                    <span className="ml">a. &nbsp; </span>
                    <span>Cookies</span>
                </p>
                <p>
                    A cookie is a small text file that is sent to or accessed
                    from your web browser or your device’s memory. A cookie
                    typically contains the name of the domain from which the
                    cookie originated, the lifetime of the cookie, and a
                    randomly generated unique number or other identifiers.
                    Cookies may also contain information about your device, such
                    as user settings, browsing history and activities conducted
                    while using our Services.
                </p>
                <ul>
                    <li>
                        <span>First-party cookies:</span>
                    </li>
                </ul>
                <p>
                    Pixel tags, also known as “web beacons,” “conversion
                    pixels,” “retargeting pixels,” “GIFs” or “bugs,” are
                    one-pixel transparent images located on web pages or
                    messages. They track whether you have opened these web pages
                    or messages. Upon firing, a pixel tag logs a visit to the
                    current page or message and may read or set cookies.
                </p>
                <p>
                    <span className="ml">b. &nbsp; </span>
                    <span>Pixel tags</span>
                </p>
                <p>
                    Pixel tags, also known as “web beacons,” “conversion
                    pixels,” “retargeting pixels,” “GIFs” or “bugs,” are
                    one-pixel transparent images located on web pages or
                    messages. They track whether you have opened these web pages
                    or messages. Upon firing, a pixel tag logs a visit to the
                    current page or message and may read or set cookies.
                </p>
                <p>
                    <span className="ml">c. &nbsp; </span>
                    <span> Functional trackers</span>
                </p>
                <p>
                    Pixel tags, also known as “web beacons,” “conversion
                    pixels,” “retargeting pixels,” “GIFs” or “bugs,” are
                    one-pixel transparent images located on web pages or
                    messages. They track whether you have opened these web pages
                    or messages. Upon firing, a pixel tag logs a visit to the
                    current page or message and may read or set cookies.
                </p>
                <p>
                    <span className="ml">d. &nbsp; </span>
                    <span>Targeting trackers</span>
                </p>
                <p>
                    Pixel tags, also known as “web beacons,” “conversion
                    pixels,” “retargeting pixels,” “GIFs” or “bugs,” are
                    one-pixel transparent images located on web pages or
                    messages. They track whether you have opened these web pages
                    or messages. Upon firing, a pixel tag logs a visit to the
                    current page or message and may read or set cookies.
                </p>
                <p>
                    <span className="ml">e. &nbsp; </span>
                    <span>Targeting trackers</span>
                </p>
                <p>
                    Pixel tags, also known as “web beacons,” “conversion
                    pixels,” “retargeting pixels,” “GIFs” or “bugs,” are
                    one-pixel transparent images located on web pages or
                    messages. They track whether you have opened these web pages
                    or messages. Upon firing, a pixel tag logs a visit to the
                    current page or message and may read or set cookies.
                </p>
                <p>
                    <span className="ml">f. &nbsp; </span>
                    <span>Targeting trackers</span>
                </p>
                <p>
                    Pixel tags, also known as “web beacons,” “conversion
                    pixels,” “retargeting pixels,” “GIFs” or “bugs,” are
                    one-pixel transparent images located on web pages or
                    messages. They track whether you have opened these web pages
                    or messages. Upon firing, a pixel tag logs a visit to the
                    current page or message and may read or set cookies.
                </p>
                <p>
                    <span>Tracker Tables</span>
                </p>
                <p>
                    You can find more information about the trackers we use,
                    their name, category they belong to (strictly necessary,
                    performance, functional or targeting), cookie type (1st or
                    3rd-party) and duration in the tables below.
                </p>
                <table>
                    <thead>
                        <tr>
                            <td colSpan={1} rowSpan={1}>
                                Leaf Group Website Name
                            </td>
                            <td>Host / Provider</td>
                            <td>Tracker Name</td>
                            <td>Category</td>
                            <td>
                                Cookie types: if tracker is a cookie, is it a
                                First Party (set by the website being visited)
                                or a Third Party cookie?
                            </td>
                            <td>
                                f tracker is a cookie, what is its duration? Is
                                it a session-only cookie (“0”) or persistent
                                cookie (number = number of days)?
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {TabelData.map((tabel) => (
                            <tr key={tabel.id}>
                                <td>{tabel.Group}</td>
                                <td>{tabel.Host}</td>
                                <td>{tabel.Tracker}</td>
                                <td>{tabel.Category}</td>
                                <td>{tabel.CookieType}</td>
                                <td>{tabel.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>
                    <span>How to Contact Us</span>
                </p>
                <p>
                    you have any questions about this Cookie Notice or the
                    information we hold about you, please contact our Legal team
                    at privacy@leafgroup.com or send a letter to: Leaf Group
                    Ltd. <br />
                    Attn: Legal Department <br />
                    1655 26th Street <br />
                    Santa Monica, CA 90404 <br />
                    UNITED STATES OF AMERICA
                </p>
                <p>
                    <span>Changes to This Cookie Notice</span>
                </p>
                <p>
                    We review our Cookie Notice from time to time to ensure that
                    it is compliant with the applicable data protection laws.
                    <br />
                    This policy was last updated on March 13, 2023.
                </p>
            </div>
        </PageTemplate>
    );
};

export default CookieNotice;
