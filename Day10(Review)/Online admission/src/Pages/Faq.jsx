import React from "react";
import { useDispatch } from "react-redux";
import { close } from "../redux/FooterSlice";
function Faq() {
    const dispatch = useDispatch();
  const faq = [
    {
      id: 1,
      question: " How do I apply to college?",
      answer:
        "To apply to college please visit our admission portal and create an account. Once logged in, you can complete and submit your application online.",
    },
    {
      id: 2,
      question: "What are the admission requirements?",
      answer:
        "Admission requirements vary by program and level (undergraduate, graduate, etc.). Please refer to the 'Admission Requirements' section on our portal for detailed information.",
    },
    {
      id: 3,
      question: "  How do I check the status of my application?",
      answer:
        "You can check the status of your application by logging into your account on our admission portal. There, you will find updates on the status of your application and any additional requirements.",
    },
    {
      id: 4,
      question: "When is the application deadline?",
      answer:
        "Application deadlines differ for each program and admission cycle. Please visit the 'Important Dates' section on our portal to find the specific deadline for your program.",
    },
    {
      id: 5,
      question: "  How do I submit my supporting documents (transcripts, letters of recommendation, etc.)?",
      answer:
        "You can upload and submit your supporting documents directly through our admission portal. Be sure to follow the instructions provided for document submission."
    },
    {
      id: 6,
      question: "Can I edit my application after submission?",
      answer:
        "In most cases, you can make edits to your application before the application deadline. Log in to your account on the portal and check if the edit option is available. After the deadline, changes may not be possible.",
    },
    {
      id: 7,
      question: "  Is there an application fee, and how can I pay it?",
      answer:
        "Yes, there may be an application fee. You can find information about the application fee and payment methods on the payment page of our admission portal.",
    },
    {
      id: 8,
      question: " What should I do if I encounter technical issues with the portal?",
      answer:
        "If you experience technical issues while using our portal, please contact our technical support team at [Technical Support Email or Phone Number]. They will assist you in resolving the problem.",
    },
    {
      id: 9,
      question: " Can I apply for financial aid or scholarships through the portal?",
      answer:
        "Yes, you can apply for financial aid and scholarships through our admission portal. Visit the 'Financial Aid' section to access relevant forms and information.",
    },
    {
      id: 10,
      question: "How will I be notified of my admission decision?",
      answer:
        "You will receive your admission decision through the portal. Notifications are typically sent electronically, and you will be informed of the decision status and any further steps to take.",
    },
    {
      id: 11,
      question: "What if I have more questions or need additional assistance?",
      answer:
        "f you have further questions or need assistance, please contact our admission office at [Admission Office Email or Phone Number]. Our staff is here to help you throughout the application process.",
    }
  ];
  return (
    <div className="fixed bg-opacity-70 top-0 left-0  bg-black z-50  h-screen w-screen flex  justify-center">
    
       <div> <i className="fa fa-times text-white text-2xl cursor-pointer" onClick={()=>dispatch(close())}></i></div>
      <div className=" h-[90%] w-[70%] bg-white top-[5%] fixed overflow-y-scroll">
        <h1 className="text-center text-2xl text-black">Frequently Asked Questions ?</h1>
        <div>
          <div className=" space-y-5">
            {faq.map((faq, index) => (
              <>
                <div className="flex text-xl gap-2">
                  <p>
                    {faq.id}
                    {"."}
                  </p>

                  <p>{faq.question}</p>
                </div>
                <p className="pl-10">{faq.answer}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
