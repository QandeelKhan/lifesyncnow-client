import React from "react";
import "../components/css/privacy.css";
import PageTemplate from "../components/PageTemplate";
import PageMainHeading from "../components/PageMainHeading";
import { PrivacyData } from "../data";
const Privacy = () => {
    return (
        <>
            <PageTemplate>
                <PageMainHeading title="Privacy Notice" />
                <div className="privacy-page-content">
                    <p>
                        <span>Last Updated: March 13</span>
                        <span>, 2023</span>
                    </p>
                    <p>
                        This Privacy Notice (“Privacy Notice” or “Notice”)
                        describes how we collect, use, share, manage or disclose
                        or generally process your personal information as a
                        visitor or customer when you visit or use our websites,
                        mobile apps, applications, digital services, or any
                        related products, services, sites, features or
                        functionalities (each a “Service“, collectively the
                        “Services“) that link to this Privacy Notice, and how
                        Leaf Group collects, uses, shares, processes and manages
                        your personal information. <br />
                        <br />
                        We collect and use your personal information and in
                        accordance with applicable data protection and privacy
                        laws (“Data Protection Laws“), to keep it secure and
                        recognize and respect your privacy rights. We have
                        included below specific provisions relevant to users in
                        different regions.
                    </p>
                    <ul>
                        <li>
                            <span>
                                <a href="/">
                                    European Privacy Rights (Section 10){" "}
                                </a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="/">
                                    Nevada Privacy Rights (Section 11)
                                </a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="/">
                                    California Privacy Rights (Section 12){" "}
                                </a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="/">
                                    Virginia Privacy Rights (Section 13){" "}
                                </a>
                            </span>
                        </li>
                    </ul>
                    <p>
                        We use the terms “personal data” and “personal
                        information” interchangeably in this Privacy Notice, and
                        they mean any information about a living individual from
                        which that individual can be identified. By
                        “processing”, we refer to any operation or set of
                        operations performed upon personal data, which means
                        anything that is done to, or with, personal data,
                        including simply collecting, using, storing or deleting
                        those data, but also organizing, structuring, altering,
                        combining with other data, transmitting or
                        disseminating. <br />
                        It is important that you read this Privacy Notice
                        together with any other privacy notice or fair
                        processing notice we may provide on specific occasions
                        when we are collecting or processing personal
                        information about you so that you are fully aware of how
                        and why we are using your personal information. This
                        Privacy Notice supplements any other notices and privacy
                        policies and is not intended to override them. By using
                        the Services, you acknowledge that you have read this
                        Privacy Notice and you understand how we collect, share
                        or generally process your personal data and what your
                        privacy rights are, as described in this Notice. <br />
                        Where our Services may include third-party content and
                        links to other third-party websites, we are not
                        responsible for the privacy practices or the content of
                        these third-party websites. You are encouraged to review
                        the privacy policies of the different websites that you
                        visit.
                    </p>
                    <p>
                        <span>1. </span>
                        <span>Our Details and How To Contact Us</span>
                    </p>
                    <p>
                        Leaf Group Ltd., or one of its wholly-owned
                        subsidiaries/affiliates, including Society6, LLC,
                        Saatchi Online, Inc., Deny Designs, Other Art Fairs Ltd.
                        and Other Art Fairs Australia Pty. Ltd., is the
                        controller of your personal data as it relates to this
                        Privacy Notice — including for the purposes of UK and EU
                        data protection legislation. When we use the terms “Leaf
                        Group”, “we”, “us”, or “our” in this Privacy Notice, we
                        are referring to the relevant company that is
                        responsible for processing your personal data in the
                        applicable context. This Privacy Notice does not apply
                        to personal data that Leaf Group processes solely on
                        behalf of another organization. <br />
                        If you have any questions about this Privacy Notice or
                        our processing activities, you can contact us via the
                        details below. If you wish to exercise any of your
                        privacy rights, please use the appropriate web form
                        linked in Sections 10, 11, 12 or 13, as applicable.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan={1} rowSpan={1}>
                                    Controller name
                                </td>
                                <td colSpan={1} rowSpan={1}>
                                    Email address
                                </td>
                                <td colSpan={1} rowSpan={1}>
                                    Mailing address
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {PrivacyData.map((privacy) => (
                                <tr key={privacy.id}>
                                    <td colSpan={1} rowSpan={1}>
                                        {privacy.controller_1}
                                    </td>
                                    <td colSpan={1} rowSpan={1}>
                                        <p>
                                            <span>
                                                All users (UK and EU users
                                                included):
                                            </span>{" "}
                                            <span>
                                                <a href="/">{privacy.Email} </a>
                                            </span>
                                        </p>
                                    </td>

                                    {/* <td>{privacy.controller_2}</td> */}

                                    <td colSpan={1} rowSpan={1}>
                                        {privacy.MailAddress}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>
                        <span>
                            2. Personal Information that We Collect from You
                        </span>
                    </p>
                    <p>
                        {" "}
                        <span>
                            {" "}
                            Account Data You Directly and Voluntarily Provide to
                            Us.
                        </span>{" "}
                        We collect and process some or all of the following
                        personal information you make available to us if you
                        register, download or use the Services, enroll in our
                        mailing lists or text message campaigns, apply for a
                        job, interact with customer support, make a purchase, or
                        otherwise communicate with us through the Services:
                    </p>
                    <ul>
                        <li>
                            <span>Name</span>
                        </li>
                        <li>
                            <span>Email Address</span>
                        </li>
                        <li>
                            <span>Mailing Address</span>
                        </li>
                        <li>
                            <span>Phone Number</span>
                        </li>
                        <li>
                            <span>Date of birth</span>
                        </li>
                        <li>
                            <span>
                                Passport number, driver’s license or state
                                identification card number
                            </span>
                        </li>
                        <li>
                            <span>Interests, favorites, and preferences</span>
                        </li>
                        <li>
                            <span>Username</span>
                        </li>
                        <li>
                            <span>Password</span>
                        </li>
                        <li>
                            <span>Other Registration Information</span>
                        </li>
                    </ul>
                    <p>
                        <span>User Profile Data. </span>In certain
                        circumstances, we may offer you the option to create an
                        account with the Services. By creating an account, you
                        are also creating a user profile that is visible to
                        other users. By default, this user profile will only
                        include your name (however, on saatchiart.com it will
                        also include your likes and followers), but you can
                        choose to include additional information, such as the
                        pages you follow, your likes and interests. You may be
                        able to adjust your account settings through your user
                        account so that certain profile information is no longer
                        visible to other users of the Services. We note that,
                        even if you adjust your settings so that information in
                        your user profile remains private, we will still be able
                        to access and view the information you provide as part
                        of your user profile.
                    </p>
                    <p>
                        <span>Personal Contacts.</span>In certain circumstances,
                        we may offer you the option to create an account with
                        the Services. By creating an account, you are also
                        creating a user profile that is visible to other users.
                        By default, this user profile will only include your
                        name (however, on saatchiart.com it will also include
                        your likes and followers), but you can choose to include
                        additional information, such as the pages you follow,
                        your likes and interests. You may be able to adjust your
                        account settings through your user account so that
                        certain profile information is no longer visible to
                        other users of the Services. We note that, even if you
                        adjust your settings so that information in your user
                        profile remains private, we will still be able to access
                        and view the information you provide as part of your
                        user profile.
                    </p>
                    <p>
                        <span>Weight, Height, and Activity Level. </span>
                        If you use the “MyPlate Calorie Counter” mobile app, we
                        may collect and track this information in order to
                        operate this service.
                    </p>
                    <p>
                        <span>Artist Data (on Saatchiart.com).</span>
                        If you are accessing the Services as a current or
                        potential affiliate artist on the saatchiart.com
                        website, we ask you to provide your name, legal name, a
                        copy of a government-issued ID, contact information,
                        address and financial information. You may also
                        voluntarily provide us with more information in the
                        Biography, Education, Events and Exhibitions sections of
                        our website, which could include employment information.
                    </p>
                    <p>
                        <span>Public Data You Post Through the Services. </span>
                        If you post information on your user profile or other
                        public areas of the Services, such as reviews, comments,
                        and user content, that information may be collected and
                        used by us, other users of the Services, and the public
                        generally. We strongly recommend that you do not post
                        any information through the Services that allows
                        strangers to identify or locate you or any other person,
                        or that you otherwise do not want to share with the
                        public.
                    </p>
                </div>
            </PageTemplate>
        </>
    );
};

export default Privacy;
