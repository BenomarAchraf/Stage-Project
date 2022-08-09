import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiZoomIn } from "react-icons/bi";
import "./Contact.css";
const Contact = () => {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Mail, setMail] = useState("");
  const [Num, setNum] = useState("");
  const [Sujet, setSujet] = useState("");
  const [Msg, setMsg] = useState("");
  const [Hide, setHide] = useState(false);
  const [Confirmer, setConfirmer] = useState(
    "Votre Msg a été envoyer avec succées"
  );

  const Hidefct = () => {
    setTimeout(() => {
      setHide(false);
    }, 5000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!Nom || !Prenom || !Sujet || !Msg || !Mail) {
      setConfirmer("Tout les champs doivent etre remplies ");
      setHide(true);
      Hidefct();
    } else {
      setConfirmer("Votre Msg a été envoyer avec succées ");
      setHide(true);
      Hidefct();
      setNom("");
      setMail("");
      setPrenom("");
      setMsg("");
      setNum("");
      setSujet("");
      emailjs
        .sendForm(
          "service_8jfu3bi",
          "template_vehkd7i",
          form.current,
          "va3E8JCCPJx0TUMda"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="Contact">
      <div className="Contact1">
        <form ref={form} className="grid-Container" onSubmit={sendEmail}>
          <div className="grid-item">
            <div className="grid">
              <div className="grid-item0">
                <input
                  type="text"
                  id=""
                  name="Nom"
                  value={Nom}
                  placeholder="Nom*"
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className="grid-item1">
                <input
                  type="text"
                  id=""
                  name="Prenom"
                  value={Prenom}
                  placeholder="Prenom*"
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid-item2">
            <div className="grid-item2-1">
              <div className="grid-item2-10">
                <input
                  type="text"
                  id="Mail"
                  name="Email"
                  placeholder="Email*"
                  value={Mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>

              <div className="grid-item2-11">
                <input
                  type="text"
                  id=""
                  name="Telephone"
                  value={Num}
                  placeholder="Telephone*"
                  onChange={(e) => setNum(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <input
              type="text"
              id="Sujet"
              name="Sujet"
              value={Sujet}
              placeholder="Sujet*"
              onChange={(e) => setSujet(e.target.value)}
            />
          </div>
          <div className="grid-item4"></div>
          <textarea
            type="text"
            id="Msg"
            className="Message"
            name="Message"
            placeholder="Message*"
            cols="30"
            rows="6"
            onChange={(e) => setMsg(e.target.value)}
            value={Msg}
          ></textarea>

          <div className="grid-item5">
            <button className="button1" type="submit">
              {" "}
              Send Message....{" "}
            </button>
          </div>
          {Hide && <div className="grid-item6">{Confirmer}</div>}
        </form>
      </div>
    </div>
  );
};
export default Contact;
