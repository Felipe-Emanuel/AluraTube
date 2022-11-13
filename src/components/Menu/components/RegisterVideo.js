import { useState } from "react";
import { StyledRegisterVideo } from "../../../styles/StyledRegisterVideo";
import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = 'https://evcnothedzfqefyounys.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y25vdGhlZHpmcWVmeW91bnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODM2MDUsImV4cCI6MTk4Mzg1OTYwNX0.r6hSrhUKKyDOy3-NbHz4KCaUoDuiLTkb6g6CB8O_xqI'

const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`
}

const useForm = (FormProps) => {
  const [values, setValues] = useState(FormProps.initialValues);

  return {
    values,
    handleSubmit: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ ...values, [name]: value });
    },
    clearForm() {
      setValues({});
    },
  };
};

const handleFormSubmit = (e) => {
    e.preventDefault();

    supabase.from("video").insert({
        title: formCadaster.values.title,
        url: formCadaster.values.url,
        thumb: getThumbnail(formCadaster.values.url),
        playlist: "jogos"
    })
    .then((resp) => {
        console.log(resp)
    })
    .catch((err) => {
        console.log(err)
    })

    setShowForm(false);
    formCadaster.clearForm();
    //atualizar a página
};

export const RegisterVideo = () => {
   
  const formCadaster = useForm({
    initialValues: { title: "", url: "" },
  });
  const [showForm, setShowForm] = useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setShowForm(true)}>
        +
      </button>
      {showForm ? (
        <form
          onSubmit={() => {handleFormSubmit()}}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setShowForm(false)}
            >
              X
            </button>
            <input
              type="text"
              value={formCadaster.values.title}
              onChange={formCadaster.handleSubmit}
              name="title"
              placeholder="Título do vídeo"
            />
            <input
              type="text"
              value={formCadaster.values.url}
              onChange={formCadaster.handleSubmit}
              name="url"
              placeholder="URL"
            />
            <button type="submit" className="">
              Cadastrar
            </button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
};
