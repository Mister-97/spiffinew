import React from "react";
import Point from "../../components/Legal/Point";

const Privacy = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "#656565",
        }}
      >
        Privacy Policy
      </h2>
      <Point>
        <p>
          Spiffi operates the https://www.spiffi.cleaning website,
          which provides the SERVICE.
        </p>
        <p>
          This page is used to inform website visitors regarding our policies
          with the collection, use, and disclosure of Personal Information if
          anyone decided to use our Service, the Spiffi website.
        </p>
        <p>
          If you choose to use our Service, then you agree to the collection and
          use of information in relation with this policy. The Personal
          Information that we collect are used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy. Our Privacy Policy was created
          with the help of the Privacy Policy Template Generator.
        </p>
        <p>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at
          https://www.spiffi.cleaning, unless otherwise defined in this
          Privacy Policy.
        </p>
      </Point>
      <Point title="Information Collection and Use">
        For a better experience while using our Service, we may require you to
        provide us with certain personally identifiable information, including
        but not limited to your name, phone number, and postal address. The
        information that we collect will be used to contact or identify you.
      </Point>

      <Point title="Log Data">
        <p>
          We want to inform you that whenever you visit our Service, we collect
          information that your browser sends to us that is called Log Data.
          This Log Data may include information such as your computer’s Internet
          Protocol ("IP") address, browser version, pages of our Service that
          you visit, the time and date of your visit, the time spent on those
          pages, and other statistics.
        </p>
      </Point>

      <Point title="Service Providers">
        <p>
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
        <p>
          We want to inform our Service users that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
      </Point>

      <Point title="Security">
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
      </Point>

      <Point title="Links to Other Sites">
        Our Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over,
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </Point>

      <Point title="Children's Privacy">
        <p>
          Our Services do not address anyone under the age of 13. We do not
          knowingly collect personal identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to take necessary actions.
        </p>
      </Point>

      <Point title="Changes to This Privacy Policy">
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately, after they are posted on this
          page.
        </p>
      </Point>

      <Point title="Contact Us">
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us.
      </Point>
    </div>
  );
};

export default Privacy;
