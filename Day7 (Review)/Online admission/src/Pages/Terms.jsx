import React from "react";
import { close } from "../redux/FooterSlice";
import { useDispatch } from "react-redux";

const Terms = () => {
    const dispatch = useDispatch();
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-50 bg-black bg-opacity-70 flex justify-center">
      <div className=" bg-white  p-5 text-justify top-[5%] w-[70%] h-[90%] fixed overflow-y-scroll">
        <div>
        <i onClick={()=>dispatch(close())} class="fa fa-times text-2xl fixed left-[86%] top-[2%] text-white cursor-pointer"  aria-hidden="true"></i>
        </div>
        <div className="flex flex-col justify-evenly space-y-5 ">
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl text-slate-950">
              Effective Date : 23/09/2023
            </h1>
            <h1 className="w-full text-3xl text-center ">
              TERMS AND COMNDITIONS 
            </h1>
            <p className=" text-justify">
              <span className="text-bold text-xl"> Thank you </span>for
              considering <span className="text-blue">COLLEGE </span> as your
              destination for higher education. We are delighted to provide you
              with access to our online admission portal, designed to streamline
              the application process and facilitate your journey to becoming a
              part of our academic community. Before you begin your application,
              it is essential that you carefully read and understand the terms
              and conditions outlined below. These terms and conditions govern
              your use of our admission portal and set forth the rights,
              responsibilities, and expectations for both applicants and the
              college.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-blue-600 font-dmsans">
              1. Introduction
            </h1>
            <p className="pl-8 text-justify">
              An online admission portal's terms and conditions are essential to
              set forth the rules, rights, and responsibilities of both the
              institution offering admissions and the applicants seeking
              admission. Below is a brief overview of the typical terms and
              conditions you might find on such a portal:
            </p>
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl text-blue-600 font-dmsans ">
              2. Acceptance of terms
            </h1>
            <p className="pl-8 text-justify">
              By submitting your acceptance of admission through this portal,
              you acknowledge and agree to the following:
            </p>
            <h1 className="text-xl  font-dmsans">2.1 Enrollment Commitment:</h1>
            <p className="pl-8 text-justify">
              You commit to enrolling as a student at [College Name] for the
              academic term specified in your admission offer letter.
            </p>
            <h1 className="text-xl  font-dmsans">2.2 Tuition and Fees:</h1>
            <p className="pl-8 text-justify">
              You understand that your acceptance of admission obligates you to
              pay all applicable tuition and fees according to the college's
              published schedule and policies.
            </p>
            <h1 className="text-xl  font-dmsans">2.3 Confirmation Deposit:</h1>
            <p className="pl-8 text-justify">
              If required, you agree to submit the confirmation deposit by the
              specified deadline to secure your place in the incoming class.
              This deposit is non-refundable and will be applied toward your
              tuition.
            </p>
            <h1 className="text-xl  font-dmsans">2.4 Deferral or Gap Year:</h1>
            <p className="pl-8 text-justify">
              If you intend to defer your enrollment or take a gap year before
              matriculating, you must follow the college's official deferral
              process. Unauthorized deferral or gap year arrangements may result
              in the rescission of your admission.
            </p>
            <h1 className="text-xl  font-dmsans">2.5 Enrollment Commitment</h1>
            <p className="pl-8">
              You commit to enrolling as a student at college for the academic
              term specified in your admission offer letter.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl text-blue-600 font-dmsans">
              3. Eligibility
            </h1>
            <h1 className="text-xl  font-dmsans">3.1 Academic Requirements:</h1>
            <p className="pl-8 text-justify">
              To be eligible for admission, applicants must have successfully
              completed a high school diploma or its equivalent from a
              recognized institution. Additional academic prerequisites may vary
              by program and will be specified within the program-specific
              admission requirements.
            </p>
            <h1 className="text-xl  font-dmsans">3.2 Age Requirements:</h1>
            <p className="pl-8 text-justify ">
              Applicants must meet the minimum age requirements set by college
              for the desired program. If you are under the age of 18, you may
              be required to provide parental or legal guardian consent as part
              of your application.
            </p>
            <h1 className="text-xl ">3.3 Previous Academic Records:</h1>
            <p className="pl-8 text-justify">
              You must provide accurate and complete information about your
              previous academic history, including transcripts from all
              educational institutions attended. Any discrepancies or
              misrepresentation may result in the rejection of your application
              or revocation of admission if already granted.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl text-blue-600">4 Application Process: </h1>
            <p className="pl-8 text-justify">
              The portal explains the step-by-step application process,
              including deadlines, submission methods, and document
              requirements.
            </p>
            <h1 className="text-xl ">4.1 Application Submission:</h1>
            <p className="pl-8">
              To initiate the application process, applicants must create an
              account on the portal and complete the online application form,
              providing accurate and truthful information.
            </p>
            <h1 className="text-xl ">4.2 Supporting Documents: </h1>
            <p className="pl-8">
              In addition to the application form, applicants are required to
              submit supporting documents, including transcripts, test scores,
              letters of recommendation, and essays, as specified in the
              application checklist.
            </p>
            <h1 className="text-xl ">4.3 Application Fee:</h1>
            <p className="pl-8">
              Payment of the non-refundable application fee, if applicable, is
              required for the application to be considered complete. Details
              about fee amounts and payment methods can be found on the portal.
            </p>
            <h1 className="text-xl ">4.4 Review and Notification: </h1>
            <p className="pl-8">
              Once submitted, applications will be reviewed by the admissions
              committee. Applicants will be notified of their admission status
              through the portal, and further instructions for enrollment, if
              admitted, will be provided.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl text-blue-600">5 Privacy Policy</h1>
            <h1 className="text-xl ">5.1 Information Collection: </h1>
            <p className="pl-8">
              We collect personal and application-related data for the purpose
              of processing admissions, including contact details, academic
              records, and supporting documents.
            </p>
            <h1 className="text-xl ">5.2 Data Usage: </h1>
            <p className="pl-8">
              Your information is used solely for the admission process,
              communication, and statistical analysis to enhance our services.
            </p>
            <h1 className="text-xl ">5.3 Security: </h1>
            <p className="pl-8">
              We employ industry-standard security measures to protect your data
              from unauthorized access or disclosure.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl text-blue-600">6. Accessbility</h1>
            <p className="pl-8">
              College is committed to ensuring that our online admission portal
              is accessible to all individuals, including those with
              disabilities. We strive to adhere to web accessibility standards
              and guidelines to provide an inclusive application experience.
            </p>
            <p className="pl-8">
              If you encounter accessibility barriers or require accommodations
              during the application process due to a disability, please contact
              our Accessibility Services Office at [contact information]. We
              will work diligently to provide reasonable accommodations to
              ensure equal access to our portal and admission process.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl text-blue-600">7 intellectual property</h1>
            <h1 className="text-xl">7.1 Trademarks: </h1>
            <p className="pl-8">
              You may want to protect the name and logo of your online admission
              portal as trademarks. This prevents others from using a similar
              name or logo that might confuse users.
            </p>
            <h1 className="text-xl">7.2 Copyright:</h1>
            <p className="pl-8">
              Copyright protects original content, such as text, graphics,
              videos, and software code on your portal. Ensure that you have the
              rights to use or display any content that you didn't create
              yourself. If you've developed custom software, you should consider
              copyright protection for the code.
            </p>
            <h1 className="text-xl">7.3 Open Source Software: </h1>
            <p className="pl-8">
              Be cautious when using open-source software in your portal. Ensure
              that you comply with the licenses of any open-source components
              you incorporate into your platform.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl text-blue-600">8 Changes to terms</h1>
            <h1 className="text-xl">
              8.1 Review Current Terms and Identify Changes:
            </h1>
            <p className="pl-8">
              Start by thoroughly reviewing your current terms and conditions.
              Identify the specific changes you want to make and the reasons
              behind them. Ensure that the changes are necessary and compliant
              with relevant laws and regulations.
            </p>
            <h1 className="text-xl">8.2 Notification to Users:</h1>
            <p className="pl-8">
              Notify your users about the upcoming changes. This notification
              should be clear and conspicuous, and it can be done through
              various channels, including email, in-app notifications, and on
              your website. Provide a reasonable notice period (e.g., 30 days)
              before the changes take effect.
            </p>
            <h1 className="text-xl">8.3 Explain the Changes:</h1>
            <p className="pl-8">
              In your notification, clearly explain the nature of the changes,
              why they are being made, and how they may impact users. Use plain
              and understandable language to ensure that users can easily
              comprehend the modifications.
            </p>
            <h1 className="text-xl">
              8.4 Collect User Consent or Acknowledgment:
            </h1>
            <p className="pl-8">
              Depending on the nature of the changes and applicable regulations,
              you may need to obtain user consent or acknowledgment. For
              significant changes, you might require users to actively agree to
              the new terms by clicking an "Accept" button. For less substantial
              changes, you may simply ask users to acknowledge the
              modifications.
            </p>
            <h1 className="text-xl">8.5 Provide an Opt-Out Option:</h1>
            <p className="pl-8">
              In some cases, you may want to allow users the option to opt out
              of the service if they do not agree with the changes. Clearly
              communicate how users can opt out and any consequences or
              limitations associated with doing so.
            </p>
            <h1 className="text-xl">
              8.6 Update Terms and Conditions Document:
            </h1>
            <p className="pl-8">
              Revise your terms and conditions document to incorporate the
              changes. Ensure that it is clear, well-organized, and easily
              accessible on your website or within your app. Indicate the
              effective date of the new terms.
            </p>
            <h1 className="text-xl">8.6 Maintain Records:</h1>
            <p className="pl-8">
              Keep records of the notifications sent to users, their responses
              (if applicable), and the effective date of the updated terms. This
              documentation can be important in case of disputes or legal
              issues.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl text-blue-600">
              9 Feedback and Complaints{" "}
            </h1>
            <p className="pl-8">
              Feedback and complaints are valuable sources of information for
              improving your college admission portal and ensuring a positive
              user experience. Here's a guide on how to manage and address
              feedback and complaints effectively:
            </p>
            <h1 className="text-xl">9.1 Provide Multiple Feedback Channels:</h1>
            <p className="pl-8">
              {" "}
              Make it easy for users to provide feedback and submit complaints.
              Offer various channels such as email, a dedicated feedback form on
              your website, a helpline, or a live chat feature. Consider using
              social media platforms as well.
            </p>
            <h1 className="text-xl">
              9.2 Clearly Communicate Feedback Options:
            </h1>
            <p className="pl-8">
              Ensure that users are aware of how to provide feedback and report
              complaints. This information should be prominently displayed on
              your portal and in your communications.
            </p>
            <h1 className="text-xl">9.3 Acknowledge Receipt:</h1>
            <p className="pl-8">
              Respond promptly to feedback and complaints to acknowledge that
              you've received them. An automated confirmation email or message
              can reassure users that their input is valued.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl text-blue-600">
              10. Cookies and Tracking:
            </h1>
            <h1 className="text pl-8">
              {" "}
              Cookies and tracking mechanisms play a significant role in the
              operation of websites and online platforms, including college
              admission portals. However, it's essential to handle cookies and
              tracking in a responsible and transparent manner, especially in
              light of privacy regulations like the General Data Protection
              Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              Here's how you can manage cookies and tracking for your college
              admission portal.
            </h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
