import { useInput } from "../hooks/useInput";


type BaseProps = {
  className: string,
}

const UserFormInput = ({ className }: BaseProps, props: BaseProps) => {
    const { value:weight, bind:bindWeight, reset:resetWeight } = useInput('');
  
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        alert(`Weight submitted: ${weight}`);
        resetWeight();

    }

    return (
      <form className={className} onSubmit={handleSubmit}>
        <label>
          Weight:
        </label>
        <input type="text" {...bindWeight} />

        <button type="submit" value="Submit"> Add Set </button>
      </form>
    );
}

export default UserFormInput

