import React, { useEffect, useState } from "react";
import "../components/css/privacy.css";
import PageTemplate from "../components/PageTemplate";
import PageMainHeading from "../components/PageMainHeading";
import { PrivacyData, PrivacyData2 } from "../data";
import axios from "axios";
const Privacy = () => {
    const [privacy, setPrivacy] = useState<any>({});
    const [data, setData] = useState<any>([]);
    const [paragraphs, setParagraphs] = useState<any>([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/privacy")
            .then((response) => {
                setData(response.data);
                setPrivacy(response.data[0]);
                setParagraphs(response.data[0].paragraphs);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <PageTemplate>
                {data.map((myData: any) => (
                    <div>
                        <PageMainHeading title={myData.title} />
                        <div className="privacy-page-content">
                            {myData.paragraphs_privacy_policy.map(
                                (paragraph: any) => (
                                    <div>
                                        <p>{paragraph.paragraph_title}</p>
                                        <br />
                                        <p>{paragraph.paragraph_content}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </PageTemplate>
        </>
    );
};

export default Privacy;

//
// return (
//     <>
//         <PageTemplate>
//             <PageMainHeading title="Privacy Notice" />
//             <div className="privacy-page-content">
//                 <p>
//                     <span>Last Updated: March 13</span>
//                     <span>, 2023</span>
//                 </p>
//                 <p>
//                     This Privacy Notice (“Privacy Notice” or “Notice”)
//                     describes how we collect, use, share, manage or disclose
//                     or generally process your personal information as a
//                     visitor or customer when you visit or use our websites,
//                     mobile apps, applications, digital services, or any
//                     related products, services, sites, features or
//                     functionalities (each a “Service“, collectively the
//                     “Services“) that link to this Privacy Notice, and how
//                     Leaf Group collects, uses, shares, processes and manages
//                     your personal information. <br />
//                     <br />
//                     We collect and use your personal information and in
//                     accordance with applicable data protection and privacy
//                     laws (“Data Protection Laws“), to keep it secure and
//                     recognize and respect your privacy rights. We have
//                     included below specific provisions relevant to users in
//                     different regions.
//                 </p>
//                 <ul>
//                     <li>
//                         <span>
//                             <a href="/">
//                                 European Privacy Rights (Section 10){" "}
//                             </a>
//                         </span>
//                     </li>
//                     <li>
//                         <span>
//                             <a href="/">
//                                 Nevada Privacy Rights (Section 11)
//                             </a>
//                         </span>
//                     </li>
//                     <li>
//                         <span>
//                             <a href="/">
//                                 California Privacy Rights (Section 12){" "}
//                             </a>
//                         </span>
//                     </li>
//                     <li>
//                         <span>
//                             <a href="/">
//                                 Virginia Privacy Rights (Section 13){" "}
//                             </a>
//                         </span>
//                     </li>
//                 </ul>
//                 <p>
//                     We use the terms “personal data” and “personal
//                     information” interchangeably in this Privacy Notice, and
//                     they mean any information about a living individual from
//                     which that individual can be identified. By
//                     “processing”, we refer to any operation or set of
//                     operations performed upon personal data, which means
//                     anything that is done to, or with, personal data,
//                     including simply collecting, using, storing or deleting
//                     those data, but also organizing, structuring, altering,
//                     combining with other data, transmitting or
//                     disseminating. <br />
//                     It is important that you read this Privacy Notice
//                     together with any other privacy notice or fair
//                     processing notice we may provide on specific occasions
//                     when we are collecting or processing personal
//                     information about you so that you are fully aware of how
//                     and why we are using your personal information. This
//                     Privacy Notice supplements any other notices and privacy
//                     policies and is not intended to override them. By using
//                     the Services, you acknowledge that you have read this
//                     Privacy Notice and you understand how we collect, share
//                     or generally process your personal data and what your
//                     privacy rights are, as described in this Notice. <br />
//                     Where our Services may include third-party content and
//                     links to other third-party websites, we are not
//                     responsible for the privacy practices or the content of
//                     these third-party websites. You are encouraged to review
//                     the privacy policies of the different websites that you
//                     visit.
//                 </p>
//                 <p>
//                     <span>1. </span>
//                     <span>Our Details and How To Contact Us</span>
//                 </p>
//                 <p>
//                     Leaf Group Ltd., or one of its wholly-owned
//                     subsidiaries/affiliates, including Society6, LLC,
//                     Saatchi Online, Inc., Deny Designs, Other Art Fairs Ltd.
//                     and Other Art Fairs Australia Pty. Ltd., is the
//                     controller of your personal data as it relates to this
//                     Privacy Notice — including for the purposes of UK and EU
//                     data protection legislation. When we use the terms “Leaf
//                     Group”, “we”, “us”, or “our” in this Privacy Notice, we
//                     are referring to the relevant company that is
//                     responsible for processing your personal data in the
//                     applicable context. This Privacy Notice does not apply
//                     to personal data that Leaf Group processes solely on
//                     behalf of another organization. <br />
//                     If you have any questions about this Privacy Notice or
//                     our processing activities, you can contact us via the
//                     details below. If you wish to exercise any of your
//                     privacy rights, please use the appropriate web form
//                     linked in Sections 10, 11, 12 or 13, as applicable.
//                 </p>
//                 <table>
//                     <thead>
//                         <tr>
//                             <td colSpan={1} rowSpan={1}>
//                                 Controller name
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 Email address
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 Mailing address
//                             </td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* {PrivacyData.map((privacy) => ( */}
//                         <tr>
//                             <td colSpan={1} rowSpan={1}>
//                                 Leaf Group Ltd.
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 <p>
//                                     <span>
//                                         All users (UK and EU users
//                                         included):
//                                     </span>{" "}
//                                     <span>
//                                         <a href="/"> </a>
//                                     </span>
//                                 </p>
//                             </td>

//                             {/* <td>{privacy.controller_2}</td> */}

//                             <td colSpan={1} rowSpan={1}>
//                                 {" "}
//                                 All users: Attn: Legal Department 1655 26th
//                                 Street – Santa Monica, CA 90404 – UNITED
//                                 STATES UK users may also contact us at: 4th
//                                 Floor, 15 D’Arblay Street, London, W1F 8DZ –
//                                 UNITED KINGDOM
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan={1} rowSpan={1}>
//                                 Leaf Group Ltd.
//                             </td>
//                             <td colSpan={1} rowSpan={2}>
//                                 <p>
//                                     <span>
//                                         All users (UK and EU users
//                                         included):
//                                     </span>{" "}
//                                     <span>
//                                         <a href="/"> </a>
//                                     </span>
//                                 </p>
//                             </td>

//                             {/* <td>{privacy.controller_2}</td> */}

//                             <td colSpan={1} rowSpan={2}>
//                                 {" "}
//                                 All users: Attn: Legal Department 1655 26th
//                                 Street – Santa Monica, CA 90404 – UNITED
//                                 STATES UK users may also contact us at: 4th
//                                 Floor, 15 D’Arblay Street, London, W1F 8DZ –
//                                 UNITED KINGDOM
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan={1} rowSpan={1}>
//                                 Leaf Group Ltd.
//                             </td>

//                             {/* <td>{privacy.controller_2}</td> */}
//                         </tr>
//                         <tr>
//                             <td colSpan={1} rowSpan={1}>
//                                 Leaf Group Ltd.
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 <p>
//                                     <span>
//                                         All users (UK and EU users
//                                         included):
//                                     </span>{" "}
//                                     <span>
//                                         <a href="/"> </a>
//                                     </span>
//                                 </p>
//                             </td>

//                             {/* <td>{privacy.controller_2}</td> */}

//                             <td colSpan={1} rowSpan={1}>
//                                 {" "}
//                                 All users: Attn: Legal Department 1655 26th
//                                 Street – Santa Monica, CA 90404 – UNITED
//                                 STATES UK users may also contact us at: 4th
//                                 Floor, 15 D’Arblay Street, London, W1F 8DZ –
//                                 UNITED KINGDOM
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan={1} rowSpan={1}>
//                                 Leaf Group Ltd.
//                             </td>
//                             <td colSpan={1} rowSpan={2}>
//                                 <p>
//                                     <span>
//                                         All users (UK and EU users
//                                         included):
//                                     </span>{" "}
//                                     <span>
//                                         <a href="/"> </a>
//                                     </span>
//                                 </p>
//                             </td>

//                             {/* <td>{privacy.controller_2}</td> */}

//                             <td colSpan={1} rowSpan={2}>
//                                 {" "}
//                                 All users: Attn: Legal Department 1655 26th
//                                 Street – Santa Monica, CA 90404 – UNITED
//                                 STATES UK users may also contact us at: 4th
//                                 Floor, 15 D’Arblay Street, London, W1F 8DZ –
//                                 UNITED KINGDOM
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan={1} rowSpan={1}>
//                                 Leaf Group Ltd.
//                             </td>

//                             {/* <td>{privacy.controller_2}</td> */}
//                         </tr>

//                         {/* ))} */}
//                     </tbody>
//                 </table>
//                 <p>
//                     <span>
//                         2. Personal Information that We Collect from You
//                     </span>
//                 </p>
//                 <p>
//                     {" "}
//                     <span>
//                         {" "}
//                         Account Data You Directly and Voluntarily Provide to
//                         Us.
//                     </span>{" "}
//                     We collect and process some or all of the following
//                     personal information you make available to us if you
//                     register, download or use the Services, enroll in our
//                     mailing lists or text message campaigns, apply for a
//                     job, interact with customer support, make a purchase, or
//                     otherwise communicate with us through the Services:
//                 </p>
//                 <ul>
//                     <li>
//                         <span>Name</span>
//                     </li>
//                     <li>
//                         <span>Email Address</span>
//                     </li>
//                     <li>
//                         <span>Mailing Address</span>
//                     </li>
//                     <li>
//                         <span>Phone Number</span>
//                     </li>
//                     <li>
//                         <span>Date of birth</span>
//                     </li>
//                     <li>
//                         <span>
//                             Passport number, driver’s license or state
//                             identification card number
//                         </span>
//                     </li>
//                     <li>
//                         <span>Interests, favorites, and preferences</span>
//                     </li>
//                     <li>
//                         <span>Username</span>
//                     </li>
//                     <li>
//                         <span>Password</span>
//                     </li>
//                     <li>
//                         <span>Other Registration Information</span>
//                     </li>
//                 </ul>
//                 <p>
//                     <span>User Profile Data. </span>In certain
//                     circumstances, we may offer you the option to create an
//                     account with the Services. By creating an account, you
//                     are also creating a user profile that is visible to
//                     other users. By default, this user profile will only
//                     include your name (however, on saatchiart.com it will
//                     also include your likes and followers), but you can
//                     choose to include additional information, such as the
//                     pages you follow, your likes and interests. You may be
//                     able to adjust your account settings through your user
//                     account so that certain profile information is no longer
//                     visible to other users of the Services. We note that,
//                     even if you adjust your settings so that information in
//                     your user profile remains private, we will still be able
//                     to access and view the information you provide as part
//                     of your user profile.
//                 </p>
//                 <p>
//                     <span>Personal Contacts.</span>In certain circumstances,
//                     we may offer you the option to create an account with
//                     the Services. By creating an account, you are also
//                     creating a user profile that is visible to other users.
//                     By default, this user profile will only include your
//                     name (however, on saatchiart.com it will also include
//                     your likes and followers), but you can choose to include
//                     additional information, such as the pages you follow,
//                     your likes and interests. You may be able to adjust your
//                     account settings through your user account so that
//                     certain profile information is no longer visible to
//                     other users of the Services. We note that, even if you
//                     adjust your settings so that information in your user
//                     profile remains private, we will still be able to access
//                     and view the information you provide as part of your
//                     user profile.
//                 </p>
//                 <p>
//                     <span>Weight, Height, and Activity Level. </span>
//                     If you use the “MyPlate Calorie Counter” mobile app, we
//                     may collect and track this information in order to
//                     operate this service.
//                 </p>
//                 <p>
//                     <span>Artist Data (on Saatchiart.com).</span>
//                     If you are accessing the Services as a current or
//                     potential affiliate artist on the saatchiart.com
//                     website, we ask you to provide your name, legal name, a
//                     copy of a government-issued ID, contact information,
//                     address and financial information. You may also
//                     voluntarily provide us with more information in the
//                     Biography, Education, Events and Exhibitions sections of
//                     our website, which could include employment information.
//                 </p>
//                 <p>
//                     <span>Public Data You Post Through the Services. </span>
//                     If you post information on your user profile or other
//                     public areas of the Services, such as reviews, comments,
//                     and user content, that information may be collected and
//                     used by us, other users of the Services, and the public
//                     generally. We strongly recommend that you do not post
//                     any information through the Services that allows
//                     strangers to identify or locate you or any other person,
//                     or that you otherwise do not want to share with the
//                     public.
//                 </p>
//                 <p>
//                     <span>3. </span>
//                     <span>
//                         Information We Automatically Collect from Your
//                         Device or Browser
//                     </span>
//                 </p>
//                 <p>
//                     In addition to the information you provide to us, where
//                     legally permitted the Services automatically collect and
//                     process information from your device or browser. This
//                     information includes your:
//                 </p>
//                 <ul>
//                     <li>
//                         <span>Device Registration Data</span>: this may
//                         include the type of mobile device you use; your
//                         mobile device’s advertising ID (a unique user ID
//                         assigned to your mobile device or operating
//                         environment, and stored directly on the device
//                         itself, to help advertising services personalize
//                         their offers. It can be sent to advertisers and
//                         other third parties which can use this unique ID to
//                         track the user’s movements, habits, and usages of
//                         applications); your IP address, operating system or
//                         browser type.
//                     </li>

//                     <li>
//                         <span>
//                             “View in Your Room” feature on saatchiart.com
//                             and society6.com
//                         </span>
//                         : if you use this feature on the society6.com or
//                         saatchiart.com mobile app or the saatchiart.com
//                         website, which uses augmented reality to let you see
//                         the depth of an artwork, dimension and perspective
//                         and give you a realistic preview of how the artwork
//                         will look on your wall, we will access your mobile
//                         device motion sensors and camera, but only with your
//                         consent.
//                     </li>
//                     <li>
//                         <span>Device Settings:</span>
//                         for example, your language preference.
//                     </li>
//                     <li>
//                         <span>Mobile Carrier.</span>
//                     </li>
//                     <li>
//                         <span>
//                             Information about how you use the Services,
//                         </span>
//                         or example through our use of tracking technology
//                         that informs us how many times you use the Services
//                         each day and which pages you have viewed.
//                     </li>
//                     <li>
//                         <span>Requested and Referring URLs:</span>
//                         including, for example, when you are referred to us
//                         by an affiliate partner URL or you request to visit
//                         an affiliate partner’s URL linked to on our
//                         Services.
//                     </li>
//                     <li>
//                         <span>
//                             Imprecise location data collected through your
//                             Device:{" "}
//                         </span>
//                         we will collect your IP address. The following
//                         websites will also collect the country, state and
//                         city inferred from your IP address: saatchiart.com,
//                         society6.com and theotherartfair.com websites, and
//                         the Society6 and Saatchi Art mobile apps).
//                     </li>
//                     <li>
//                         <span>
//                             Data collected through cookies and other
//                             tracking technologies:
//                         </span>
//                         including, but not limited to, your IP address and
//                         domain name, your browser version and operating
//                         system, traffic data, imprecise location data, web
//                         logs and other communication data, and the resources
//                         that you access. Please refer to our Cookie Notice
//                         for more information on data collected through
//                         cookies and other tracking technologies.
//                     </li>
//                 </ul>
//                 <p>
//                     Information once “de-identified” (or “anonymized”) to
//                     the standard required by applicable law is not subject
//                     to this Privacy Notice and we may treat it as
//                     non-personal information, which means we could use it
//                     without restrictions nor obligation to you, except as
//                     prohibited by applicable law.
//                 </p>
//                 <p>
//                     <span>4. </span>
//                     <span>
//                         Information We Collect from Third Parties about You
//                     </span>
//                 </p>
//                 <p>
//                     In addition to information we collect from you – either
//                     directly from you (see Section 2 above) or automatically
//                     through our Site (see Section 3 above) – we may also
//                     combine it with information we receive about you, which
//                     consists of information collected offline or from
//                     third-party sources such as data aggregators, email
//                     acquisition, email identity and email marketing
//                     companies, marketing platforms, customer relationship
//                     management data platforms and customer data platforms
//                     and offline print catalogs, in order to help us tailor
//                     our communications to you, improve our services, better
//                     understand your interests, preferences, propensity to
//                     buy from your visits and past transactions on any of our
//                     websites, visits of other partner websites and certain
//                     offline activities such as whether you have recently
//                     refinanced a mortgage or made a recent purchase of real
//                     estate. <br />
//                     Some of the information received about you may come from
//                     consumer data resellers and includes information that
//                     combines your personal information with those companies’
//                     own records and records they themselves obtained from
//                     other sources.
//                 </p>
//                 <p>
//                     <span>5. </span>
//                     <span>How We Use Your Personal Information</span>
//                 </p>
//                 <p>
//                     <span>5.1. </span>
//                     <a></a>{" "}
//                     <span>
//                         To Provide or Improve Our Services, Provide Support,
//                         and Communicate with You.{" "}
//                     </span>
//                     We and our service providers use the personal
//                     information you provide, or that is collected through
//                     the Services, to operate, facilitate and fulfill
//                     transactions, authenticate you as a user of our
//                     Services, personalize your user experience on our
//                     websites, and improve our Services, other sites,
//                     applications, products and services, to contact you from
//                     time to time to provide you with important information
//                     and notices relating to the Services, and to carry out
//                     obligations arising from any agreements between you and
//                     us. <br />
//                     For EEA, UK and Swiss personal data – please refer to
//                     sub-section 10.2 below for the legal bases for
//                     processing.
//                 </p>
//                 <p>
//                     <span>5.2. </span>
//                     <a></a>{" "}
//                     <span>
//                         To Carry out Marketing Activities such as
//                         Promotions.{" "}
//                     </span>
//                     We and our service providers use the personal
//                     information you provide or that is collected through the
//                     Services to provide you with updates, offers, and
//                     promotions, where you have chosen to receive these. We
//                     also use your information for marketing our own and our
//                     selected business partners’ products and services to you
//                     by email and, where required by Data Protection Laws, we
//                     will ask for your consent at the time we collect your
//                     personal information to conduct any of these types of
//                     marketing. If you wish to unsubscribe from receiving
//                     marketing communications from us by email, please follow
//                     the instructions contained in each email you receive
//                     from us describing how you can unsubscribe from
//                     receiving further marketing communications from us. If
//                     you are a registered user you may also be able to adjust
//                     your email settings by logging in to your account and
//                     adjusting your account settings. <br />
//                     For EEA, UK and Swiss personal data – please refer to
//                     sub-section 10.2 below for the legal bases for
//                     processing
//                 </p>
//                 <p>
//                     <span>5.3. </span>
//                     <a></a>{" "}
//                     <span>To Organize Sweepstakes and Contests. </span>
//                     From time to time, we may host sweepstakes or a contest
//                     on our Services. You may be asked to provide personal
//                     information or permit its transfer to a third party in
//                     connection with such sweepstakes or contest. The parties
//                     whose privacy notice applies will be disclosed at the
//                     point of collection or transfer and you will have a
//                     choice of whether or not you wish to permit such
//                     transfer or collection of information to a third party.
//                 </p>
//                 <p>
//                     <span>5.4. </span>
//                     <a></a>{" "}
//                     <span>
//                         To Process Your Payments and Fulfill Your Orders and
//                         Purchases.{" "}
//                     </span>
//                     If you make a purchase through the Services, you may be
//                     able to pay using a third-party payment service, such as
//                     Stripe, PayPal, Apple Pay, Amazon Pay or other
//                     third-party payment services. The personal information
//                     collected by these third-party payment services (such as
//                     your credit card number and billing address) is for the
//                     sole purpose of processing transactions – fulfilling
//                     your orders, facilitating payment, shipping the products
//                     that you purchase from society6.com, saatchiart.com or
//                     through any of other Services, preventing transactional
//                     fraud and in accordance with your preferences and
//                     permissions and the terms and conditions set forth in
//                     your and our agreements with those third-party payment
//                     services – and is not available to us. We only store a
//                     tokenized (anonymized) version of such information and
//                     do not maintain payment card information on our servers.
//                     Personal information collected from you by these
//                     third-party payment services is governed by the
//                     applicable third-party payment service’s privacy notice.
//                     You should review their privacy notice prior to
//                     submitting any personal information to them. When you
//                     make a purchase, depending upon your payment method, an
//                     authorization is obtained in the amount of your cart
//                     balance. Your payment information is securely stored by
//                     our third-party payment processors. Once your shipment
//                     is ready, the charge for your purchase is submitted to
//                     your bank for processing and your shipping information,
//                     order history, returns, and downloads are securely
//                     stored by Us and our third-party shipping partners to
//                     fulfill your current and future orders.
//                 </p>
//                 <p>
//                     <span>6. </span>
//                     <a></a> <span>Advertising and Analytics</span>
//                 </p>
//                 <p>
//                     <span>6.1. </span>
//                     <span>
//                         Advertising and Third-Party Content and Links
//                     </span>
//                 </p>
//                 <p>
//                     The Services are supported through advertising. From
//                     time to time we work with third-party companies,
//                     advertisers and advertising networks, to enable them to
//                     collect certain information regarding how you engage
//                     with our websites and to provide advertising through the
//                     Services. <br /> We may allow third-party companies,
//                     including advertisers, ad networks, and advertising
//                     services providers, to serve advertisements, provide
//                     other advertising services, or collect personal
//                     information when you visit the Services. We provide
//                     these companies with the ability to collect personal
//                     information about how you interact with the Services
//                     and, if applicable, your mobile device. <br /> This
//                     personal information includes the unique device or
//                     advertising ID associated with your device and imprecise
//                     location information (only the country, state and, on
//                     some of our websites, the city where you connect from),
//                     in order to help analyze and serve targeted advertising
//                     on the Services and elsewhere (including third-party
//                     sites and applications). <br /> In addition, we share
//                     with these third-party providers personal information
//                     that is pseudonymized (information that only identifies
//                     you indirectly), which may consist of the following
//                     data:
//                 </p>
//                 <ul>
//                     <li>
//                         a hashed version of information that we collect from
//                         you directly (such as an email or a phone number)
//                     </li>
//                     <li>
//                         a third party IDs, such as a mobile advertising ID,
//                         a device identifier or other proprietary ID assigned
//                         by third parties)
//                     </li>
//                     <li>n IP address</li>
//                     <li>
//                         the clickstream information generated by your
//                         browser, such as HTTP header fields, browser type,
//                         time and date stamps), or operating system
//                     </li>
//                     <li>
//                         statistical identifiers calculated from data shared
//                         by your browser or device
//                     </li>
//                     <li>
//                         the subject of advertisements you clicked or
//                         scrolled over, etc.
//                     </li>
//                 </ul>
//                 <p>
//                     all of which are collected during your visit to the
//                     Services in order to provide advertisements about goods
//                     and services likely to be of interest to you on our
//                     websites, but also on websites of third-party companies.{" "}
//                     <br />
//                     For EEA, UK and Swiss personal data – please refer to
//                     sub-section 10.3 below for the legal bases for
//                     processing.
//                 </p>
//                 <p>
//                     <span>6.2. </span>
//                     <span>Matched Ads. </span>As an example, we serve ads on
//                     and through third-party companies, such as Apple,
//                     Facebook and Google, that are targeted to reach people
//                     (or people who are similar to you as a customer or to
//                     our target audience) who have visited our Services or
//                     are identified in one or more of our databases. These
//                     ads are called “matched ads”. This is generally done by
//                     us uploading a customer list to a technology service or
//                     incorporating a pixel from a technology service on our
//                     Services, and the technology service matching common
//                     factors between our data and their data. For instance,
//                     we incorporate the Facebook pixel on our Services and
//                     may share your email address with Facebook as part of
//                     our use of Facebook Custom Audiences. <br />
//                     For EEA, UK and Swiss personal data – please refer to
//                     sub-section 10.3 below for the legal bases for
//                     processing.
//                 </p>
//                 <p>
//                     <span>6.3. </span>
//                     <span>
//                         How to Opt Out of Matched Ads and Targeted
//                         Advertising?
//                     </span>
//                 </p>
//                 <p>
//                     To opt out of Matched Ads, please contact the applicable
//                     technology service listed below. California and Virginia
//                     residents may also opt out of the use of their personal
//                     information for interest-based advertising, including
//                     Matching Ads, by following the instructions in Sections
//                     12 and 13, respectively.
//                 </p>
//                 <ul>
//                     <li>
//                         If we serve Matched Ads through Apple services, you
//                         should be able to click into the box in the lower
//                         right corner of such ads to find out how
//                     </li>
//                     <li>
//                         If we serve Matched Ads on Facebook services using
//                         Facebook Custom Audiences, you should be able to
//                         hover over the box in the right corner of such
//                         Facebook ads and find out how to opt-out.
//                     </li>
//                     <li>
//                         If we serve Matched Ads through LiveRamp, you should
//                         be able to opt out from those ads by visiting
//                         <span>
//                             <a
//                                 href="https://liveramp.com/opt_out/&amp;sa=D&amp;source=editors&amp;ust=1678404964513306&amp;usg=AOvVaw3flenb8TvM1UxYUZ04PiSS"
//                                 target="_blank"
//                                 rel="noopener"
//                             >
//                                 https://liveramp.com/opt_out/{" "}
//                             </a>
//                         </span>
//                         <span>.</span>
//                     </li>
//                     <li>
//                         If we serve Matched Ads through Epsilon, you should
//                         be able to opt out from those ads by
//                         <span>
//                             <a
//                                 href="https://legal.epsilon.com/dsr/&amp;sa=D&amp;source=editors&amp;ust=1678404964513543&amp;usg=AOvVaw1XjNgY-L1JiTrYBjfoR3Nb"
//                                 target="_blank"
//                                 rel="noopener"
//                             >
//                                 https://legal.epsilon.com/dsr/{" "}
//                             </a>
//                         </span>
//                         <span>.</span>
//                     </li>
//                     <li>
//                         If we serve Matched Ads through Zeta Global, you
//                         should be able to opt out from those ads by visiting
//                         the Zeta Global opt-out page at{" "}
//                         <span>
//                             <a
//                                 href="https://zetaglobal.com/rights-request/&amp;sa=D&amp;source=editors&amp;ust=1678404964513753&amp;usg=AOvVaw0s_dL_0n2QaYLGSsBGg8Nw"
//                                 target="_blank"
//                                 rel="noopener"
//                             >
//                                 https://zetaglobal.com/rights-request/#{" "}
//                             </a>
//                         </span>
//                         and Zeta Global’s Privacy Request page at{" "}
//                         <span>
//                             <a
//                                 href="https://privacyportal-cdn.onetrust.com/dsarwebform/bc2d3301-11a5-4de5-b15e-ce796187a352/d0720d0f-d427-4a7d-a773-5d6793229f15.html&amp;sa=D&amp;source=editors&amp;ust=1678404964513968&amp;usg=AOvVaw3IAYNFACRecFi6RId5tPaz"
//                                 target="_blank"
//                                 rel="noopener"
//                             >
//                                 https://privacyportal-cdn.onetrust.com/dsarwebform/bc2d3301-11a5-4de5-b15e-ce796187a352/d0720d0f-d427-4a7d-a773-5d6793229f15.html{" "}
//                             </a>
//                         </span>
//                         <span>.</span>
//                     </li>
//                     <li>
//                         To opt out of the use of this data by NIS for the
//                         purposes described above, click here: Neustar
//                         Privacy Choices [
//                         <span>
//                             <a
//                                 href="https://www.home.neustar/privacy/opt-out&amp;sa=D&amp;source=editors&amp;ust=1678404964514196&amp;usg=AOvVaw0_mG9FE2qpQHsZGpYXLVs5"
//                                 target="_blank"
//                                 rel="noopener"
//                             >
//                                 https://www.home.neustar/privacy/opt-out{" "}
//                             </a>
//                         </span>
//                         ] or here: Network Advertising Initiative’s Consumer
//                         Opt-Out Tool [
//                         <span>
//                             <a
//                                 href="http://optout.networkadvertising.org/&amp;sa=D&amp;source=editors&amp;ust=1678404964514355&amp;usg=AOvVaw1PSkFDhfoJ7jfxbjSINOOy"
//                                 target="_blank"
//                                 rel="noopener"
//                             >
//                                 http://optout.networkadvertising.org/{" "}
//                             </a>
//                         </span>
//                         <span>].</span>
//                     </li>
//                 </ul>
//                 <p>
//                     To opt out of targeted advertising: for information
//                     about how tracking works for targeted advertising
//                     purposes, and to opt out of the collection of personal
//                     information for the purposes described above by
//                     companies participating in the Digital Advertising
//                     Alliance Self-Regulatory Program, you can visit:
//                 </p>
//                 <ul>
//                     <li>
//                         from your browser:
//                         <span>
//                             <a href="https://www.aboutads.info/choices&amp;sa=D&amp;source=editors&amp;ust=1678404964514670&amp;usg=AOvVaw2sM6Z4YSc501AxS6xlek7v">
//                                 https://www.aboutads.info/choices{" "}
//                             </a>
//                         </span>
//                         <span>.</span>
//                     </li>
//                     <li>
//                         from your mobile device:
//                         <span>
//                             <a href="https://www.aboutads.info/appchoices&amp;sa=D&amp;source=editors&amp;ust=1678404964514868&amp;usg=AOvVaw2Ze_-wO_n4dUPrULt1BRy-">
//                                 https://www.aboutads.info/appchoices{" "}
//                             </a>
//                         </span>
//                         <span>.</span>
//                     </li>
//                 </ul>
//                 <p>
//                     To opt out of this type of advertising by third parties
//                     that are members of the Network Advertising Initiative
//                     (“NAI”), please visit:
//                 </p>
//                 <ul>
//                     <li>
//                         the NAI’s website
//                         <span>
//                             <a href="https://www.aboutads.info/appchoices&amp;sa=D&amp;source=editors&amp;ust=1678404964514868&amp;usg=AOvVaw2Ze_-wO_n4dUPrULt1BRy-">
//                                 (https://www.Networkadvertising.org):
//                             </a>
//                         </span>
//                         <span>.</span>
//                         it will allow you to opt out of tailored advertising
//                         by one, or all, NAI members.
//                     </li>
//                 </ul>
//                 <p>
//                     We are not responsible for such technology service’s
//                     failure to comply with your opt-out instructions. <br />
//                     For EEA, UK and Swiss personal data – please refer to
//                     sub-section 10.3 below for the legal bases for
//                     processing.
//                 </p>
//                 <p>
//                     <span>6.4. </span>
//                     <span>Analytics Services</span>
//                 </p>
//                 <p>
//                     We also work with third-party analytics companies to
//                     help us understand and analyze how you use our Services
//                     and assist us with delivering to you relevant marketing
//                     messages and advertisements. <br />
//                     These analytics companies (e.g., Google Analytics)
//                     collect information about the content you view and your
//                     system information as well as imprecise location
//                     information (only the country, state and, on some of our
//                     websites, the city where you connect from). <br />
//                     Neither they, nor we, do collect precise geolocation
//                     information about your visits from your devices, such as
//                     GPS coordinates, WiFi, radio frequency location and
//                     RFID, Bluetooth, or latitude and longitude information).{" "}
//                     <br />
//                     For EEA, UK and Swiss personal data – please refer to
//                     sub-section 10.3 below for the legal bases for
//                     processing.
//                 </p>
//                 <p>
//                     <span>7. </span>
//                     <span>
//                         Third Parties to Whom We Disclose Your Personal
//                         Information
//                     </span>
//                 </p>
//                 <p>
//                     We disclose the personal information you provide or that
//                     we collect in some circumstances to the following third
//                     parties:
//                 </p>
//                 <p>
//                     <span>7.1. </span>
//                     <span>
//                         Advertisers, Advertising Networks and Data Analytics
//                         Companies.{" "}
//                     </span>
//                     We share your personal information with advertisers,
//                     third-party advertising networks and analytics companies
//                     who use it to deliver targeted advertisements to you on
//                     the Services or third-party websites or advertisers.
//                     Similarly, these advertisers share personal information
//                     with us about you that they have independently gathered
//                     or acquired. We also share the personal information we
//                     have collected in order to enable our advertising
//                     partners to perform data analysis or for
//                     advertising-related use. That personal information is
//                     always encrypted except cookie IDs.
//                 </p>
//                 <p>
//                     <span>7.2. </span>
//                     <a id="id.13phbifubxcd"></a>{" "}
//                     <span>
//                         Cooperative Database and Marketing Companies
//                     </span>
//                 </p>

//                 <p>
//                     These companies provide what is called a “cooperative
//                     database”, which is a type of database that holds
//                     information about customers and their transaction
//                     histories through which many companies, such as ours,
//                     will contribute information to the database in return
//                     for aggregate information on the customers other
//                     companies have provided. None of the companies that
//                     participate in these cooperative databases reveal which
//                     company has collected that data, so none of the
//                     participating companies are able to identify which
//                     company the data is associated with. Each email and
//                     mailing address is then associated with specific
//                     business categories (e.g., home decor, artwork, etc.)
//                     based on customers’ transaction histories. The
//                     participating companies, like ours, are then able to
//                     process, using data mining and other marketing targeting
//                     techniques, the email and mailing addresses in relation
//                     to the specific business categories they want to target
//                     in their direct mailing. Such databases are generally
//                     used for promotional mailings, credit card fraud
//                     detection, digital media targeting, business
//                     intelligence or fighting e-mail spam. In our case, these
//                     databases are used for promotional mailings and direct
//                     mail campaigns: this means that, from time to time, we
//                     share our customers’ email and mailing addresses and
//                     related transactional information, such as your purchase
//                     history, amounts paid and products ordered, with
//                     cooperative database and marketing companies for
//                     promotional mailings and direct mail campaigns. These
//                     types of marketing campaigns are mainly carried out in
//                     relation with our Saatchiart.com and Society6.com
//                     websites. Some of the third-party vendors who receive
//                     your personal information from us may resell it for
//                     their own direct marketing purposes, and the direct
//                     marketing purposes of other third-party marketing
//                     companies. If you prefer to opt-out of the use of your
//                     email and mailing addresses for the above purposes,
//                     please let us know at{" "}
//                     <a href="">
//                         <span>privacy@leafgroup.com.</span>{" "}
//                     </a>
//                 </p>
//                 <p>
//                     <span>7.3. </span>
//                     <span>Our Service Providers and Contractors. </span>We
//                     share your information with service providers and
//                     contractors who work on our behalf. For example, they
//                     may handle payment or credit card processing, data
//                     management, customer data pooling or aggregating,
//                     feature administration, email distribution, market
//                     research, information analysis, and promotions
//                     management. They also include accountants, auditors,
//                     lawyers, insurers or similar advisers when we ask for
//                     their professional advice. Service providers and
//                     contractors will only have access to the personal
//                     information needed to perform these limited functions on
//                     our behalf.{" "}
//                 </p>
//                 <p>
//                     <span>7.4. </span>
//                     <span>Social Media Sites. </span>Our Services may use
//                     social networking or “share functionality” or contain
//                     links to third-party social media sites or applications
//                     that are not owned or controlled by us. We also may
//                     allow you to use social media sites or applications to
//                     leverage your existing social media site or application
//                     accounts to access features of the Services. Your use of
//                     these features may result in the collection or sharing
//                     of personal information about you by these sites or
//                     applications, depending on the feature.
//                 </p>
//                 <p>
//                     <span>7.5. </span>
//                     <span>Our Business Partners</span>
//                 </p>
//                 <p>
//                     If you are directed to the Services through a third
//                     party, we share certain information back with that third
//                     party, which may include personal information such as
//                     name, email and value of purchase depending on the type
//                     of relationship or Services utilized. <br />
//                     We have no control over, and assume no responsibility
//                     for any share functionality or the content, privacy
//                     policies, or practices of any third-party site or
//                     application. We encourage you to review the privacy
//                     policies and settings on the social media sites or
//                     applications with which you interact to make sure you
//                     understand the personal information that may be
//                     collected, used, and shared by those sites. You are
//                     subject to the policies of those third parties when and
//                     where applicable.
//                 </p>
//                 <p>
//                     <span>7.6. </span>
//                     <span>Our Company Affiliates. </span>We share your
//                     personal information with members of the Leaf Group
//                     corporate family in order to provide joint content and
//                     services (like registration, transactions and customer
//                     support), or to improve your experience with the
//                     Services, products and other services.
//                 </p>
//                 <p>
//                     <span>7.7. </span>
//                     <span>Other Businesses. </span>We will disclose your
//                     personal information to other businesses in the event of
//                     a merger, acquisition, bankruptcy or other sale of all
//                     or a portion of our assets or any business, any user
//                     personal information owned or controlled by us may be
//                     one of the assets transferred to third parties in such
//                     transaction or event. We reserve the right, as part of
//                     this type of transaction or event, to transfer or assign
//                     your personal information and other personal information
//                     we have collected from users of the Services to third
//                     parties. Other than to the extent ordered by a
//                     bankruptcy or other court, the use and disclosure of all
//                     transferred user personal information will be subject to
//                     this Privacy Notice. However, any personal information
//                     you submit or that is collected after this type of
//                     transfer may be subject to a new privacy notice adopted
//                     by the successor entity or acquirer, as applicable.
//                 </p>
//                 <p>
//                     <span>7.8. </span>
//                     <span>
//                         Government Authorities, National Security or Law
//                         Enforcement Agencies, Courts and Other Similar Third
//                         Parties
//                     </span>
//                 </p>
//                 <p>
//                     We will disclose your personal information to these
//                     third parties:
//                 </p>
//                 <ul>
//                     <li>
//                         if required to do so, and to the extent permitted,
//                         by law;
//                     </li>
//                     <li>
//                         if requested in response to a subpoena or court
//                         order;
//                     </li>
//                     <li>
//                         if we believe in our sole and absolute discretion
//                         that disclosure is reasonably necessary to protect
//                         against fraud;
//                     </li>
//                     <li>
//                         to protect the property or other rights of us or
//                         other users, third parties or the public at large;
//                         or
//                     </li>
//                     <li>
//                         if we believe that you have abused the Services by
//                         using it to attack other systems or to gain
//                         unauthorized access to any other system, to engage
//                         in spamming or otherwise to violate applicable laws,
//                         or in violation of our Terms of Use.
//                     </li>
//                 </ul>
//                 <p>
//                     You should be aware that, following disclosure to any
//                     third party, your personal information may be accessible
//                     by others to the extent permitted or required by
//                     applicable law.
//                 </p>
//                 <p>
//                     <span>8. </span>
//                     <a></a>{" "}
//                     <span>
//                         Cookies and Other Tracking Technologies and How To
//                         Control Them
//                     </span>
//                 </p>
//                 <p>
//                     We use our own cookies, pixel tags, JavaScript, software
//                     development kits (“SDKs”), device identifiers and other
//                     tracking technologies on our websites or allow
//                     third-party companies, such as advertisers and
//                     advertising networks, to use the same technologies.{" "}
//                     <br />
//                     These technologies recognize your computer, mobile or
//                     other device and your actions online over time, collect
//                     personal information about you and your activities on
//                     the Services and do so across different websites and
//                     platforms, digital or marketing channels and email in
//                     order to deliver to you targeted electronic
//                     advertisements. <br />
//                     We or these third-party companies may link two or more
//                     devices or browsers believed to belong to the same user
//                     or household and use it for advertising-related
//                     purposes. <br />
//                     These third-party companies such as advertisers,
//                     advertising networks may use cookies, but also other
//                     tracking technologies such as pixel tags to recognize
//                     your computer, mobile or other device and your actions
//                     online over time, collect personal information about you
//                     and your activities on the Services and reach out to
//                     your computer, mobile or other device them across
//                     different websites and platforms, digital or marketing
//                     channels and email in order to deliver targeted
//                     electronic advertisements to an individual user.
//                     Third-party companies may link two or more devices or
//                     browsers believed to belong to the same user or
//                     household for advertising-related purposes. <br />{" "}
//                     <br />
//                     We do not have access to the information located in the
//                     cookies, pixel tags and other tracking technologies that
//                     third-party partners ask us to place on our websites,
//                     nor have control over them, except to take them off our
//                     websites, which generally happens once we terminate our
//                     agreement with them. <br /> <br />
//                     You can control the use of cookies and other tracking
//                     technologies by using the “Cookie Settings” link that is
//                     located at the bottom of all our website homepages, by
//                     changing your privacy preferences through your browser,
//                     mobile or other device, or by using a setting or
//                     extension in your browser or device that is called
//                     “Global Privacy Control”:
//                 </p>
//                 <ul>
//                     <li>
//                         <span>Through the “</span>
//                         <span>Cookie Settings</span>” link located at the
//                         bottom of all our website homepages, you can prevent
//                         us from using any cookie or other tracking
//                         technology that is not strictly necessary for you to
//                         view our websites or to enable us to provide you
//                         with our Services. Keep in mind that the cookie
//                         settings may not permit you to block the use of some
//                         tracking technologies.
//                     </li>
//                     <li>
//                         <span>Using your </span>
//                         <span>browser or device</span>, you may set it up so
//                         as to accept all cookies, only accept specific
//                         cookies, block others or all of them.
//                     </li>
//                 </ul>
//                 <p>
//                     If you are a California or Virginia resident: you may
//                     exercise your right to opt-out of sales or sharing
//                     through preference signals. Please refer to section 12
//                     (“California Privacy Rights”) and section 13 (“Virginia
//                     Privacy Rights”) below to exercise your rights with
//                     respect to cookies and other tracking technologies.{" "}
//                     <br />
//                     If you are located in the EEA, the United Kingdom or
//                     Switzerland, please refer to sub-section 10.5 and, more
//                     generally, to section 10 (“European Privacy Rights”)
//                     below to exercise your rights with respect to cookies
//                     and other tracking technologies. <br />
//                     Blocking all cookies and other tracking technologies
//                     will affect your online experience and may prevent you
//                     from enjoying the full features offered through our
//                     Services.
//                 </p>
//                 <p>
//                     <span>9. </span>
//                     <span>The Privacy of Children</span>
//                 </p>
//                 <p>
//                     The Services are not intended for children under age 16.
//                     We do not knowingly collect or distribute personal
//                     information from or about children under the age of 16.
//                     If a parent or guardian becomes aware that his or her
//                     child has provided us with information without their
//                     consent, he or she should contact us at
//                     privacy@leafgroup.com.
//                 </p>
//                 <p>
//                     <span>10. </span>
//                     <a></a> <span>European Privacy Rights</span>
//                 </p>
//                 <p>
//                     In this section, we clarify the rules that are
//                     applicable to you, as a user, website visitor or
//                     customer using our Services and if you are located in
//                     the European Economic Area (“EEA”) (which includes the
//                     European Union member states, Iceland, Norway and
//                     Liechtenstein), the United Kingdom, and Switzerland.{" "}
//                     <br />
//                     We also identify the legal bases on which we rely to use
//                     your personal data and acknowledge your right to access
//                     and control your personal data in accordance with
//                     applicable Data Protection Laws, which include but are
//                     not limited to the Regulation (EU) 2016/679 (the
//                     European Union General Data Protection Regulation, or
//                     “GDPR”), the United Kingdom GDPR (“UK GDPR”), the Swiss
//                     Act on Federal Data Protection (“FADP”) and the
//                     Directive 2002/58/EC (“e-Privacy Directive”) and other
//                     relevant national legislation implementing it
//                     (“e-Privacy Laws”), together, the “European Privacy
//                     Laws”.
//                 </p>
//                 <p>
//                     <span>
//                         10.1. Information We Automatically Collect from Your
//                         Device or Browser
//                     </span>
//                 </p>
//                 <p>
//                     If required by the European Privacy Laws, we will seek
//                     your consent to these activities and provide the ability
//                     for you to withdraw your consent via a cookie consent
//                     management platform or other appropriate means. Please
//                     see our Cookie Notice for further details.
//                 </p>
//                 <p>
//                     <span>10.2. </span>
//                     <a id="id.tvhyw075z054"></a>{" "}
//                     <span>How We Use Your Personal Data</span>
//                 </p>
//                 <ul>
//                     <li>
//                         To Provide or Improve the Services, Provide Support,
//                         and Communicate With You:
//                     </li>
//                     <li>
//                         For details please refer to sub-section 5.1 of this
//                         Privacy Notice
//                     </li>
//                     <li>
//                         Legal bases: contract performance, legitimate
//                         interests (to correspond with you, to enable us to
//                         provide you with the Services and to improve the
//                         Services).
//                     </li>
//                     <li>
//                         To Carry out Marketing Activities such as
//                         Promotions:
//                     </li>
//                     <li>
//                         For details please refer to sub-section 5.2 of this
//                         Privacy Notice.
//                     </li>
//                     <li>
//                         Legal bases: consent, legitimate interest where
//                         consent is not required (to enable us to provide you
//                         with an experience related to your interests or keep
//                         you updated with news in relation to our products
//                         and services).
//                     </li>
//                     <li>To Organize Sweepstakes and Contests:</li>
//                     <li>
//                         For details please refer to sub-section 5.3 of this
//                         Privacy Notice.
//                     </li>
//                     <li>Legal base: consent.</li>

//                     <li>
//                         To Process Your Payments and Fulfill Your Orders and
//                         Purchases:
//                     </li>
//                     <li>
//                         For details please refer to sub-section 5.4 of this
//                         Privacy Notice.
//                     </li>
//                     <li>Legal base: contract performance.</li>
//                 </ul>
//                 <p>
//                     <span>10.3. </span>
//                     <a id="id.8dmgyjm4tatk"></a>
//                     <span>Advertising and Analytics</span>
//                 </p>
//                 <p>
//                     For details please refer to section 6 of this Privacy
//                     Notice.
//                 </p>
//                 <ul>
//                     <li>
//                         How to Opt Out of Matched Ads and Targeted
//                         Advertising?
//                     </li>
//                     <li>
//                         If required by the European Privacy Laws, we will
//                         seek your consent to these activities and provide
//                         you the ability to withdraw your consent at any time
//                         via a cookie consent management platform or other
//                         appropriate means. Please see our Cookie Notice for
//                         further details.
//                     </li>
//                     <li>
//                         Our websites will honor “Do Not Track” requests from
//                         your browser if you visit us from EEA countries, the
//                         United Kingdom or Switzerland and you activate the
//                         “Do Not Track” feature in your browser settings: in
//                         this case, the “Do Not Track” request your browser
//                         sends us will automatically deactivate the targeting
//                         cookies we use on our websites. Some browsers or
//                         browser add-ons may also automatically activate that
//                         “Do Not Track” feature.
//                     </li>
//                     <li>
//                         Legal bases: consent, legitimate interest where
//                         consent is not required (to enable us to provide you
//                         with an experience related to your interests).
//                     </li>
//                     <li>Analytics Services:</li>
//                     <li>
//                         Legal bases: consent, legitimate interest where
//                         consent is not required (to enable us to provide you
//                         with an experience relevant to your interests).
//                     </li>
//                 </ul>
//                 <p>
//                     <span>
//                         10.4. Third Parties to Whom We Disclose Your
//                         Personal Data
//                     </span>
//                 </p>
//                 <p>
//                     For details please refer to section 7.2 of this Privacy
//                     Notice. <br />
//                     Where we disclose the personal data you provide, or that
//                     we collect, to cooperative database and marketing
//                     companies for promotional mailings and direct mail
//                     campaign purposes, we will seek your consent to these
//                     activities if it is required by the European Privacy
//                     Laws.
//                 </p>
//                 <p>
//                     <span>10.5. </span>
//                     <a id="id.61ar3wweosjt"></a>{" "}
//                     <span>
//                         Cookies and Other Tracking Technologies and How To
//                         Control Them
//                     </span>
//                 </p>
//                 <p>
//                     For general explanations, please refer to section 8 of
//                     this Privacy Notice. <br />
//                     If required by the European Privacy Laws, we will seek
//                     your consent to these activities and provide you with
//                     the ability to withdraw your consent via a cookie
//                     consent management platform or other appropriate means.
//                     Please see our Cookie Notice for further details.
//                 </p>
//                 <p>
//                     <span>10.6. </span>
//                     <span>Data Subject Rights</span>
//                 </p>
//                 <ul>
//                     <li>
//                         Accessing, Correcting, Erasing Your Information;
//                         Objecting to or Restricting the Processing of Your
//                         Information; or Withdrawing Your Consent:
//                     </li>
//                     <li>
//                         If you are located in the EEA, the United Kingdom or
//                         Switzerland: to request access to, correction or
//                         erasure of, your personal data, object to, or
//                         restrict the processing of your personal data, or to
//                         withdraw your consent to our processing of your
//                         personal data (where we are relying on consent as
//                         the lawful basis) in accordance with European
//                         Privacy Laws, you can visit the following page in
//                         order to exercise your data subject rights for some
//                         or all of our websites: GDPR Data Subject Rights Web
//                         Form.
//                     </li>
//                     <li>
//                         You may also contact us via the contact details in
//                         Section 1 above.
//                     </li>
//                     <li>
//                         Please include the registration information you
//                         provided through the Services. We may ask you to
//                         provide additional information for identity
//                         verification purposes, or to verify that you are in
//                         possession of an applicable email account. We will
//                         respond within a month after receiving your request
//                         or in accordance with the European Privacy Laws. If
//                         your request is complex or you have sent us several
//                         or different ones (access, correction, deletion
//                         requests, etc.), we may have extend the time to
//                         respond to you by a further two months but will
//                         always inform you of such delay within a month and
//                         explain you why the extension is necessary.
//                     </li>
//                     <li>Portability of Your Personal Data:</li>
//                     <li>
//                         Data portability is the ability to obtain some of
//                         your personal data in a machine-readable format that
//                         you can migrate, where technically feasible, from
//                         one controller to another in accordance with
//                         applicable Data Protection Laws. This right is
//                         available to users located in the EEA, United
//                         Kingdom and Switzerland in relation to the personal
//                         data that we process via automated means and in
//                         reliance on your consent. You may send your request
//                         by visiting the following page in order to exercise
//                         your right to data portability: GDPR Data Subject
//                         Rights Web Form.
//                     </li>
//                 </ul>
//                 <p>
//                     <span>10.7. </span>
//                     <span>International Transfers</span>
//                 </p>
//                 <p>
//                     We may transfer your personal data outside of the EEA,
//                     the United Kingdom or Switzerland, including to servers,
//                     databases or cloud storage facilities located in the
//                     United States. We put adequate safeguards in place when
//                     we transfer your personal data internationally. This
//                     includes only transferring personal data to countries
//                     that have been deemed to provide an adequate level of
//                     protection for personal data by the applicable
//                     regulatory authority, or by otherwise using an
//                     appropriate safeguard to ensure the ongoing protection
//                     of personal data, such as standard contractual clauses
//                     approved by the applicable regulatory authority. You may
//                     request further information on the safeguards we use by
//                     contacting us via the contact details in Section 1 of
//                     this Privacy Notice. <br />
//                     Additionally, although the EU-US and Swiss-US Privacy
//                     Shield Frameworks have been ruled invalid and we do not
//                     rely on them to legally validate our international
//                     transfers, we continue to keep to the commitments that
//                     we made when we certified to these two Frameworks
//                     regarding the collection, use, and retention of personal
//                     information we receive from individuals or companies in
//                     the EEA, the United Kingdom and Switzerland and that is
//                     transferred to the United States.
//                 </p>
//                 <p>
//                     <span>10.8. </span>
//                     <span>Complaints</span>
//                 </p>
//                 <p>
//                     If you have a concern about our handling of your
//                     personal data, please get in contact with us first so we
//                     can try to resolve your query using our contact details
//                     in section 1 of this Privacy Notice. <br />
//                     If however you feel we have not dealt with your concern
//                     and that we are failing to meet our legal obligations,
//                     the GDPR gives you the right to lodge a complaint with a
//                     supervisory authority. You can do so with your local
//                     data protection authority: the Information
//                     Commissioner’s Office in the United Kingdom or the
//                     European Union (or European Economic Area) state where
//                     you work, normally live or where any alleged
//                     infringement of data protection laws occurred.
//                 </p>
//                 <p>
//                     <span>11. </span>
//                     <a id="id.duehhlsd77ma"></a>{" "}
//                     <span>Nevada Privacy Rights</span>
//                 </p>
//                 <p>
//                     Under Nevada law, Nevada residents may submit a request
//                     directing us not to make certain disclosures of personal
//                     information we maintain about them. As a Nevada
//                     resident, you have the right to direct us not to sell
//                     any “covered information” (as that term is defined by
//                     Chapter 603A – Security and Privacy of Personal
//                     Information, Section NRS 603A.340) that we have
//                     collected or will collect about you. If you wish to
//                     exercise this right, you can visit the following page:
//                 </p>
//                 <p>
//                     <span>12. </span>
//                     <a id="id.duehhlsd77ma"></a>{" "}
//                     <span>California Privacy Rights</span>
//                 </p>
//                 <p>
//                     <span>12.1. </span>
//                     <span>California Residents Under 18. </span>
//                     If you are a California resident under the age of 18 and
//                     are a registered user of the Services, you may request
//                     that we remove content or information about you that you
//                     posted on the Services by: (a) submitting a request in
//                     writing to{" "}
//                     <span>
//                         <a href="mailto:privacy@leafgroup.com">
//                             privacy@leafgroup.com
//                         </a>
//                     </span>
//                     ; and (b) clearly identifying the content or information
//                     you wish to have removed and providing sufficient
//                     information to allow us to locate the content or
//                     information to be removed. However, please note that we
//                     are not required to, and may not be able to, erase or
//                     otherwise eliminate content or information if: (i) other
//                     state or federal laws require us or a third party to
//                     maintain the content or information; (ii) the content or
//                     information was posted, stored, or republished by
//                     another user; (iii) the content or information is
//                     anonymized so that you cannot be individually
//                     identified; (iv) you do not follow the instructions
//                     posted in this Privacy Notice on how to request removal
//                     of your content or information; or (v) you have received
//                     compensation or other consideration for providing the
//                     content. Further, nothing in this provision shall be
//                     construed to limit the authority of a law enforcement
//                     agency to obtain the applicable content or information.
//                 </p>
//                 <p>
//                     <span>12.2. </span>
//                     <a id="id.q0jw4zdp3ibz"></a>{" "}
//                     <span>
//                         California Privacy Rights – California Notice of
//                         Collectio
//                     </span>
//                     <span>n</span>
//                     <span>.</span> This section contains disclosures
//                     required by the California Privacy Rights Act of 2020 as
//                     amended by the California Privacy Rights Act (“
//                     <span>CPRA</span>
//                     ”) and applies only to “personal information” that is
//                     subject to the CPRA. Consumers with disabilities may
//                     access this notice with a standard screen reader. If you
//                     are a California resident, this section applies to you.
//                     It describes how we collect, use, and share your
//                     personal information in our capacity as a “business”
//                     under the CPRA, and the rights that you have with
//                     respect to your personal information, including
//                     sensitive personal information. For purposes of this
//                     section, “personal information” and “sensitive personal
//                     information” have the meanings given in the CPRA and do
//                     not include information excluded from the CPRA’s scope.{" "}
//                     <br />
//                     <span>
//                         A. Personal Information We Collect, Disclose for a
//                         Business Purpose, and Sell or Share
//                     </span>
//                 </p>
//                 <p>
//                     The chart below summarizes the personal information we
//                     collect and use by reference to the categories of
//                     personal information specified in the CPRA. It describes
//                     our current practices as well as our practices during
//                     the 12 months preceding the effective date of our
//                     Privacy Notice (January 1, 2023). Information you
//                     voluntarily provide to us, such as in free-form webforms
//                     or posts on some of our websites, may contain additional
//                     categories of personal information not described below.
//                     More information regarding the sources from which we
//                     collect personal information can be found in Section 2
//                     of our Privacy Notice titled “Personal Information that
//                     We Collect from You”, Section 3 titled “Information We
//                     Automatically Collect from Your Device or Browser”, and
//                     Section 4 titled “Information We Collect from Third
//                     Parties about You”. Business and commercial purposes for
//                     which we collect your personal information can be found
//                     in Section 5 of our Privacy Notice titled “How We Use
//                     Your Personal Information”. Categories of recipients
//                     with whom personal information is shared or sold can be
//                     found in Section 7 of our Privacy Notice titled “Third
//                     Parties to Whom We Disclose Your Personal Information”.
//                 </p>
//                 <table>
//                     <thead>
//                         <tr>
//                             <td colSpan={1} rowSpan={1}>
//                                 Categories of Personal Information
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 Collected in the last 12 months
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 Categories of sources from which information
//                                 is collected
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 Business or commercial purposes for
//                                 collection, use, selling, and sharing
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 Disclosed for business purposes to the
//                                 following categories of third parties
//                             </td>
//                             <td colSpan={1} rowSpan={1}>
//                                 Sold or shared to the following categories
//                                 of third parties
//                             </td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {PrivacyData2.map((data) => (
//                             <tr key={data.id}>
//                                 <td>{data.category}</td>
//                                 <td>{data.cl12}</td>
//                                 <td>{data.cSource}</td>
//                                 <td>{data.bussiness}</td>
//                                 <td>{data.tcategory}</td>
//                                 <td>{data.sold}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <p>
//                     <span>B. </span>
//                     <span>Sensitive Personal Information</span>
//                 </p>
//                 <p>
//                     Some of the personal information we collect may be
//                     considered sensitive personal information (as described
//                     in the CCPA). For further details of the sensitive
//                     personal information we collect (if any) and how we
//                     obtain this information, please review the section
//                     entitled “Personal Information that We Collect from You”
//                     above. <br />
//                     We collect, use, and disclose such sensitive personal
//                     information only for the permissible business purposes
//                     for sensitive personal information under the CPRA or
//                     without the purpose of inferring characteristics about
//                     consumers. We do not sell or share sensitive personal
//                     information.
//                 </p>
//                 <p>
//                     <span>C. </span>
//                     <span>Retention</span>
//                 </p>
//                 <p>
//                     Our retention periods for each category of personal
//                     information, including sensitive personal information,
//                     are based on our business needs and legal requirements.
//                     We retain personal information only for as long as is
//                     reasonably necessary for us to fulfill the purpose for
//                     which it was collected, and as otherwise to comply with
//                     our legal obligations, resolve disputes, prevent fraud,
//                     and enforce our agreements. If we continue to retain
//                     your personal data in accordance with a legal
//                     obligation, any further processing of your data will be
//                     limited to compliance with such legal obligation. <br />
//                     Where required by applicable law, we shall delete your
//                     personal information when we are requested to do so.
//                     Even if we delete your personal information from our
//                     active databases, some or all of the personal
//                     information you provided may be required in order for
//                     the Services to function properly and it may remain in
//                     backup storage or records retention archival media (not
//                     to be used for any other purpose) until it is
//                     permanently deleted in accordance with our standard
//                     retention schedules. <br />
//                     To determine the appropriate retention period for
//                     personal information, we consider the amount, nature and
//                     sensitivity of the personal information, the potential
//                     risk of harm from unauthorized use or disclosure of your
//                     personal information, the purposes for which we process
//                     your personal information and whether we can achieve
//                     those purposes through other means, and the applicable
//                     legal obligations.
//                 </p>
//                 <p>
//                     <span>D. </span>
//                     <span>
//                         Third Parties to Whom We Sell or Share Personal
//                         Information
//                     </span>
//                 </p>
//                 <p>
//                     We sell or share the categories of personal information
//                     designated above to the categories of third parties
//                     listed below:
//                 </p>
//                 <ul>
//                     <li>
//                         {" "}
//                         Third-parties (persons different than service
//                         providers and contractors);
//                     </li>
//                     <li>Advertising and marketing companies;</li>
//                     <li>Affiliates not under the Leaf Group brand;</li>
//                     <li>Partner programs;</li>
//                     <li>Social networks; and</li>
//                     <li>Advertising platforms.</li>
//                 </ul>
//                 <p>
//                     <span>E. </span>
//                     <span>Right to Know, Correct, and Delete</span>
//                 </p>
//                 <p>
//                     California residents have certain rights with respect to
//                     the personal information collected by businesses. If you
//                     are a California resident, you may exercise the
//                     following rights regarding your personal information,
//                     subject to certain exceptions and limitations. Please
//                     understand, however, that these rights are not absolute
//                     and are subject to exceptions, and we may be required or
//                     permitted by law to decline your request. In addition,
//                     we will not be able to process your request if you do
//                     not provide us with sufficient detail to allow us to
//                     understand and respond to it. <br />
//                     You may request the following from us:
//                 </p>
//                 <p>
//                     <span>F. </span>
//                     <span>Right to Know, Correct, and Delete</span>
//                 </p>
//                 <p>
//                     To the extent we “sell” or “share” your personal
//                     information as those terms are defined under the CPRA,
//                     you have the right to opt-out of the sale or sharing,
//                     which you can exercise through:
//                 </p>
//                 <ul>
//                     <li>
//                         The following USA Consumer Privacy Rights Web Form
//                         by choosing the option “Opt out” (this functionality
//                         will only remove you from our marketing email
//                         lists);
//                     </li>
//                     <li>
//                         The “Do Not Sell or Share My Personal Information”
//                         link that appears in the footer of our website.
//                     </li>
//                     <li>
//                         In addition, you may exercise this right by turning
//                         on a recognized opt-out preference signal, such as
//                         Global Privacy Control , through the appropriate
//                         setting or extension of your browser or mobile
//                         device.
//                     </li>
//                 </ul>
//                 <p>
//                     <span>G. </span>
//                     <span>
//                         Verification Process and Required Informatione
//                     </span>
//                 </p>
//                 <p>
//                     Note that we may need to request additional information
//                     from you to verify your identity or understand the scope
//                     of your request, although you will not be required to
//                     create an account with us to submit a request or have it
//                     fulfilled. We reserve the right to deny your requests if
//                     we cannot verify your identity.
//                 </p>
//                 <p>
//                     <span>H. </span>
//                     <span>Authorized Agent</span>
//                 </p>
//                 <p>
//                     You may designate an authorized agent to make a CPRA
//                     request on your behalf. We will require proof of your
//                     consent to designating such an agent and verification of
//                     your identity as described above. Requests must be
//                     submitted through one of the designated methods above.
//                 </p>
//                 <p>
//                     <span>I. </span>
//                     <span>Minors’ Right to Opt In</span>
//                 </p>
//                 <p>
//                     We do not knowingly sell the personal information of
//                     minors under 16 years of age.
//                 </p>
//                 <p>
//                     <span>J. </span>
//                     <span> Right to Non-Discrimination</span>
//                 </p>
//                 <p>
//                     You have the right not to receive discriminatory
//                     treatment by us for the exercise of any your rights.
//                 </p>
//                 <p>
//                     <span>K. </span>
//                     <span>Financial Incentives</span>
//                 </p>
//                 <p>
//                     Financial incentives, as defined under the CPRA, include
//                     “programs, benefits, or other offerings, including
//                     payments to consumers as compensation, for the
//                     disclosure, deletion, or sale of personal information
//                     about them. Although we do not consider our discounts
//                     and offerings to be a “financial incentive,” each may be
//                     interpreted to be one under California law. <br />
//                     We may offer discounted prices to consumers who sign up
//                     for our offerings and voluntarily provide us with
//                     certain requested personal information to be used in
//                     accordance with this Privacy Notice. <br />
//                     You can opt-in by submitting the requested personal
//                     information. You can withdraw your consent at any time
//                     by emailing us using the contact information below with
//                     “Opt-out of Financial Incentives” in the subject line.{" "}
//                     <br />
//                     We generally do not treat consumers differently if they
//                     exercise a privacy right under California law. However,
//                     you will need to provide some personal information in
//                     order to receive certain discounts or benefits. In such
//                     circumstances, we offer a price difference that is
//                     reasonably related to the value of your data to us in
//                     connection with the discount or benefit. <br />
//                     The price differences reflected in our discounts and
//                     offerings are provided based upon our reasonable
//                     determination of the estimated value of the data you
//                     provide to us, which takes into consideration a number
//                     of factors, including, among other things, our estimates
//                     regarding the anticipated revenue generated from such
//                     data and the actual and anticipated expenses that we
//                     incur in the collection, storage, and use of such data
//                     in connection with our discounts and offerings. If you
//                     choose to withdraw from our discounts and offerings or
//                     choose not to create an account with us, you can still
//                     continue to use our website as a guest user.
//                 </p>
//                 <p>
//                     <span>L. </span>
//                     <span>Shine the Light</span>
//                 </p>
//                 <p>
//                     Customers who are residents of California may request
//                     (i) a list of the categories of personal information (as
//                     that term is defined by Shine the Light) disclosed by us
//                     to third parties during the immediately preceding
//                     calendar year for those third parties’ own direct
//                     marketing purposes; and (ii) a list of the categories of
//                     third parties to whom we disclosed such information. To
//                     exercise a request, please write us at the email or
//                     postal address set out in section 1 above and specify
//                     that you are making a “California Shine the Light
//                     Request.” We may require additional information from you
//                     to allow us to verify your identity and are only
//                     required to respond to requests once during any calendar
//                     year.
//                 </p>
//                 <p>
//                     <span>13. </span>
//                     <a id="id.j4qtmmazmqfp"></a>{" "}
//                     <span>Virginia Privacy Rights</span>
//                 </p>
//                 <p>
//                     Virginia provides additional rights to Virginia
//                     residents through the Virginia Consumer Data Protection
//                     Act (“VCDPA”). This section addresses those rights and
//                     applies only to Virginia residents. <br />
//                     You have the following rights under the VCDPA:
//                 </p>
//                 <ul>
//                     <li>
//                         To confirm whether or not we are processing your
//                         personal data
//                     </li>
//                     <li>To access your personal data</li>
//                     <li>To correct inaccuracies in your personal data</li>
//                     <li>To delete your personal data</li>
//                     <li>
//                         To obtain a copy of your personal data that you
//                         previously provided to us in a portable and readily
//                         usable format
//                     </li>
//                     <li>
//                         To opt out of the processing of personal data for
//                         purposes of targeted advertising, the sale of
//                         personal data, or profiling in furtherance of
//                         decisions that produce legal or similarly
//                         significant effects concerning you
//                     </li>
//                 </ul>
//                 <p>
//                     You can visit the following page in order to exercise
//                     any of the above rights for some or all of our websites:
//                     USA Consumer Privacy Rights Web Form. <br />
//                     To exercise your right to opt out of processing your
//                     personal data for purposes of targeted advertising, the
//                     sale of your personal data, or profiling, clicking on
//                     that Web Form will only remove your email address from
//                     our marketing mailing lists. If you want to block all
//                     targeting cookies used for targeted advertising and
//                     profiling, as well as opt out of the sale of your
//                     personal data, please click on the “Cookie Settings” or
//                     “Manage Preferences” link available in the footer
//                     section of our websites. <br />
//                     We will respond to your request within 45 days. If you
//                     have an account with us, we may require you to use the
//                     account to submit the request. We may require specific
//                     information from you to help us confirm your identity
//                     and process your request. <br />
//                     If we refuse to take action on a request, you may appeal
//                     our decision within a reasonable period time by
//                     contacting us at privacy@leafgroup.com and specifying
//                     you wish to appeal. Within 60 days of our receipt of
//                     your appeal, we will inform you in writing of any action
//                     taken or not taken in response to the appeal, including
//                     a written explanation of the reasons for the decisions.
//                     If the appeal is denied, you may submit a complaint to
//                     the Virginia Attorney General at
//                     https://www.oag.state.va.us/consumercomplaintform .
//                 </p>
//                 <p>
//                     <span>14. </span>
//                     <a id="id.j4qtmmazmqfp"></a>{" "}
//                     <span>Security Measures and Storage Limits</span>
//                 </p>
//                 <p>
//                     We provide industry-standard physical, electronic, and
//                     procedural safeguards to protect personal data we
//                     process and maintain. For example, we take reasonable
//                     measures to limit access to this data to authorized
//                     employees and contractors who need to know that
//                     information in order to operate, develop or improve our
//                     Services. Please be aware that, although we endeavor to
//                     provide reasonable security for data we process and
//                     maintain, no security system can prevent all potential
//                     security breaches. As a result, we cannot guarantee or
//                     warrant the security of any information you transmit on
//                     or through the Services and you do so at your own risk.
//                     We have also put in place procedures to deal with any
//                     personal data breaches and will notify you and any
//                     applicable regulator of a breach where we are legally
//                     required to do so. <br /> <br />
//                     Our retention periods for each category of personal
//                     information, including sensitive personal information,
//                     are based on our business needs and legal requirements.
//                     We retain personal information only for as long as is
//                     reasonably necessary for us to fulfill the purpose for
//                     which it was collected, and as otherwise to comply with
//                     our legal obligations, resolve disputes, prevent fraud,
//                     and enforce our agreements. If we continue to retain
//                     your personal data in accordance with a legal
//                     obligation, any further processing of your data will be
//                     limited to compliance with such legal obligation. <br />{" "}
//                     <br />
//                     Where required by Data Protection Laws, we shall delete
//                     your personal information when we are requested to do
//                     so. Even if we delete your personal information from our
//                     active databases, some or all of the personal
//                     information you provided may be required in order for
//                     the Services to function properly and it may remain in
//                     backup storage or records retention archival media (not
//                     to be used for any other purpose) until it is
//                     permanently deleted in accordance with our standard
//                     retention schedules. <br /> <br />
//                     To determine the appropriate retention period for
//                     personal information, we consider the amount, nature and
//                     sensitivity of the personal information, the potential
//                     risk of harm from unauthorized use or disclosure of your
//                     personal information, the purposes for which we process
//                     your personal information and whether we can achieve
//                     those purposes through other means, and the applicable
//                     legal obligations.
//                 </p>
//                 <p>
//                     <span>15. </span>
//                     <a id="id.j4qtmmazmqfp"></a>{" "}
//                     <span>Updates to this Privacy Notice</span>
//                 </p>
//                 <p>
//                     If you do not agree to such changes following such
//                     notice, you should discontinue your use of the Services
//                     prior to the time the modified Privacy Notice takes
//                     effect. If you continue using the Services after the
//                     modified Privacy Notice takes effect, the modified
//                     Privacy Notice will govern any further processing of
//                     your personal data.
//                 </p>
//             </div>
//         </PageTemplate>
//     </>
// );
// };

// export default Privacy;
