import Button from "./Button";

export default function ProfileCard() {
  return (
    <>
      <div className="ProfileCard">
        <img className="img" src="././public/img01.jpg"></img>
        <p className="name">name</p>
        <p className="description">description</p>
        <Button></Button>
      </div>
    </>
  );
}
