import React from "react";
import PageTemplate from "../components/PageTemplate";
import "../components/css/contact.css";
const Contact = () => {
    return (
        <PageTemplate>
            <div className="contact-main-container">
                <div className="contact-heading">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-content">
                    <h3>Looking to advertise?</h3>
                    <span>
                        Well+Good works hand-in-hand with each of our partners
                        to ensure their creative messaging resonates best with
                        our audience. From editorial alignments, to custom
                        content solutions, to social and email strategy, to live
                        (or, ahem, virtual!) events, our sales and creative
                        teams will help you generate some major good vibes in
                        the wellness space. Visit our{" "}
                        <a href="/">advertising page</a> or write us at
                        advertising@wellandgood.com.
                    </span>
                </div>
                <div className="contact-content types">
                    <h3>
                        Are you a publicist looking for coverage of your product
                        or client?
                    </h3>
                    <span>
                        Please contact the appropriate editor below. Note that
                        due to the volume of pitches we receive each day, we may
                        not be able to respond to every request.
                    </span>
                    <div className="advertise-categories">
                        <div className="ist">
                            <span className="head">Beauty: </span>
                            <span>
                                Senior Beauty Editor Zoe Weiner
                                (zoe.weiner@wellandgood.com) and/or Senior
                                Commerce Editor Gina Vaynshteyn
                                (gina.vaynshteyn@wellandgood.com)
                            </span>
                        </div>
                        <div className="ist">
                            <span className="head">Fitness: </span>
                            <span>
                                Senior Beauty Editor Zoe Weiner
                                (zoe.weiner@wellandgood.com) and/or Senior
                                Commerce Editor Gina Vaynshteyn
                                (gina.vaynshteyn@wellandgood.com)
                            </span>
                        </div>
                        <div className="ist">
                            <span className="head">Food: </span>
                            <span>
                                Senior Beauty Editor Zoe Weiner
                                (zoe.weiner@wellandgood.com) and/or Senior
                                Commerce Editor Gina Vaynshteyn
                                (gina.vaynshteyn@wellandgood.com)
                            </span>
                        </div>
                        <div className="ist">
                            <span className="head">Health: </span>
                            <span>
                                Senior Beauty Editor Zoe Weiner
                                (zoe.weiner@wellandgood.com) and/or Senior
                                Commerce Editor Gina Vaynshteyn
                                (gina.vaynshteyn@wellandgood.com)
                            </span>
                        </div>
                        <div className="ist">
                            <span className="head">Lifestyle: </span>
                            <span>
                                Senior Beauty Editor Zoe Weiner
                                (zoe.weiner@wellandgood.com) and/or Senior
                                Commerce Editor Gina Vaynshteyn
                                (gina.vaynshteyn@wellandgood.com)
                            </span>
                        </div>
                        <div className="ist">
                            <span className="head">
                                Any other product or client pitches:{" "}
                            </span>
                            <span>
                                Senior Beauty Editor Zoe Weiner
                                (zoe.weiner@wellandgood.com) and/or Senior
                                Commerce Editor Gina Vaynshteyn
                                (gina.vaynshteyn@wellandgood.com)
                            </span>
                        </div>
                        <div className="ist">
                            <span className="head">Talent for Events: </span>
                            <span>
                                Senior Beauty Editor Zoe Weiner
                                (zoe.weiner@wellandgood.com) and/or Senior
                                Commerce Editor Gina Vaynshteyn
                                (gina.vaynshteyn@wellandgood.com)
                            </span>
                        </div>
                        <div className="ist">
                            <span className="head">Talent for Videos </span>
                            <span>
                                Senior Beauty Editor Zoe Weiner
                                (zoe.weiner@wellandgood.com) and/or Senior
                                Commerce Editor Gina Vaynshteyn
                                (gina.vaynshteyn@wellandgood.com)
                            </span>
                        </div>
                    </div>
                </div>
                <div className="contact-content">
                    <h3>
                        Are you a journalist or a writer who wants to contribute
                        to Well+Good?
                    </h3>
                    <span>
                        You can find our complete pitching guidelines here.
                    </span>
                </div>
                <div className="contact-content">
                    <h3>Do you have a media request?</h3>
                    <span>Write us at susan.turner@leafgroup.com</span>
                </div>
                <div className="contact-content">
                    <h3>
                        Do you have a question regarding your subscription to a
                        Well+Good newsletter?
                    </h3>
                    <span>Please send an email to hello@wellandgood.com.</span>
                </div>
                <div className="contact-content">
                    <h3>
                        Are you looking to license or reuse content published by
                        Well+Good?
                    </h3>
                    <span>
                        Contact our official partner, Wright’s Media about
                        available usages, license fees, and award seal artwork
                        at LeafGroup@wrightsmedia.com. Please note that Wright’s
                        Media is the only authorized company that can provide
                        Leaf Group brand materials.”{" "}
                    </span>
                </div>
                <div className="contact-content">
                    <h3>
                        Due to the COVID-19 pandemic, we are not currently
                        accepting unsolicited packages by mail.
                    </h3>
                </div>
            </div>
        </PageTemplate>
    );
};

export default Contact;
