import { useState } from "react";
import { StyledRegisterVideo } from "../../../styles/StyledRegisterVideo";

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
          onSubmit={(e) => {
            e.preventDefault();

            setShowForm(false);
            formCadaster.clearForm();
          }}
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
