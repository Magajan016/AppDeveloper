import React from "react";
import { useDispatch } from "react-redux";
// import { Close } from "@mui/icons-material";
import { close } from "../redux/FooterSlice";
function Privacy() {
    const dispatch = useDispatch();
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-50 bg-black bg-opacity-70 flex justify-center">
      <div> <i onClick={()=>dispatch(close())} class="fa fa-times text-2xl fixed left-[86%] top-[2%] text-white cursor-pointer"  aria-hidden="true"></i></div>
      <div className="bg-white p-5 top-[5%] w-[70%] h-[90%] fixed overflow-y-scroll">
        <div className="space-y-4 text-justify">
          <div className="space-y-4">
            <h1 className="text-3xl ">Privacy Policy</h1>
            <h1 className="text-2xl">Effective Date: 23/09/2023</h1>
            <p className="pl-8">
              Our College is committed to protecting the privacy and security of
              your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your personal data in
              connection with our college admission portal. By using our portal,
              you consent to the practices described in this policy.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl">1. Information We Collect</h1>
            <p className="pl-8">
              We may collect the following types of personal information from
              users of our admission portal:
            </p>
            <div className=" space-y-4">
              <li className="pl-8">
                Contact Information: Name, email address, phone number, and
                mailing address.
              </li>
              <li className="pl-8">
                Demographic Information: Date of birth, gender, and nationality.
              </li>
              <li className="pl-8">
                Educational History: Academic records, transcripts, standardized
                test scores, and extracurricular activities.
              </li>
              <li className="pl-8">
                Application Materials: Essays, letters of recommendation, and
                other application materials.
              </li>
              <li className="pl-8">
                Login Credentials: Username and password for portal access.
              </li>
              <li className="pl-8">
                Communication Data: Information related to your interactions
                with us, such as emails, chat logs, and communication
                preferences.
              </li>
              <li className="pl-8">
                Device and Usage Information: IP address, browser type,
                operating system, and usage data related to your interaction
                with our portal.
              </li>
            </div>
            <p className="pl-8"></p>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl">2. How We Use Your Information</h1>
            <p className="pl-8">
              {" "}
              We may use your personal information for the following purposes:
            </p>
            <div className="space-y-4 pl-8">
              <li>
                To process and evaluate your college admission application.
              </li>
              <li>
                To communicate with you regarding your application status and
                admission decisions.
              </li>
              <li>
                To send important updates, notifications, and announcements.
              </li>
              <li>To provide support and respond to your inquiries.</li>
              <li>To improve our admission portal and related services.</li>
              <li>To comply with legal obligations.</li>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl">3. Information Sharing</h1>
            <p className="pl-8">
              We may share your personal information with the following parties:
            </p>
            <div className="space-y-4 pl-8">
              <li>
                Educational Institutions: We may share your application data
                with the college admissions committees and relevant departments
                for evaluation.
              </li>
              <li>
                Service Providers: We may engage third-party service providers
                to assist us in providing admission services, and they may have
                access to your information.
              </li>
              <li>
                Device and Usage Information: IP address, browser type,
                operating system, and usage data related to your interaction
                with our portal.
              </li>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl">4. Security</h1>
            <p className="pl-8">
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction.
              However, no data transmission or storage can be guaranteed to be
              100% secure. We encourage you to take steps to protect your
              personal information as well.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl">5. Your Choices</h1>
            <p className="pl-8">
              You may have certain rights regarding your personal information,
              including the right to access, correct, or delete your data. To
              exercise these rights or make changes to your information, please
              contact us using the contact information provided below.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl">6. Changes to this Privacy Policy</h1>
            <p className="pl-8">
              WWe may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes
              through our portal or other communication methods.
            </p>
            <div className="space-y-4 pl-8"></div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl">7. Contact Us</h1>
            <p className="pl-8">
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us at:
            </p>
            <div className="space-y-4 pl-8">
              <li>Contact No : +255 678 (247) 23</li>
              <li>Mail : college@gmail.com</li>
              <li>147/I, Green Road</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
