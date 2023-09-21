import { useRef, useState } from "react";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.send(
      'service_aevxqrm',
      'template_bqboef4',
    {
      from_name: form.name,
      to_name: 'David Cordoba Bonvin',
      from_email: form.email,
      to_email: 'bovincode@gmail.com',
      message: form.message,
    }, 
    'sXBE4INFgDreC_U1U'
    )
    .then(() => {
      setLoading(false);
      alert('Merci, je vous contacterai dès que possible. ');
      
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert("Quelque chose n'a pas fonctionné")
    })
  };

  return (
    <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-full"
      >
        <p className={styles.heroSubText}>Jouer 1</p>
        <h3 className={styles.heroHeadText}>star</h3>
        
        
       
      </motion.div>
{/* <EarthCanvas /> */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-full"
      >
        <p className={styles.heroSubText}>Jouer 2</p>
        <h3 className={styles.heroHeadText}>star</h3>
        
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Contact, "contact");
