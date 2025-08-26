import Button from "./Button";

export default function ProfileCard() {
  return (
    <>
      <div className="ProfileCard">
        <img className="img" src="img01.jpg" width={50} height={50}></img>
        <p className="name">name</p>
        <p className="description">description</p>
        <Button />
      </div>
    </>
  );
}
