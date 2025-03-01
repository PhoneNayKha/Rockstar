import { Link } from "react-router";

export default function About() {
  return (
    <div style={{ margin: "20px auto", maxWidth: 600 }}>
      <h1>About Page</h1>
      <div style={{ marginBottom: 20, display: "flex" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        repudiandae ut, ducimus numquam vitae quod iste debitis minima minus
        eaque molestias dolorem, commodi laudantium nam. Nemo, porro voluptas
        culpa repudiandae cumque mollitia earum facilis odit totam quibusdam!
        Harum possimus obcaecati fuga optio dolorum, assumenda eius cumque
        facere, alias porro veritatis? Quasi, aut non? Voluptates a aliquam
        animi, atque enim libero, at voluptatibus incidunt illo dicta quisquam
        asperiores repellat facere nam quia expedita pariatur? Soluta,
        perspiciatis deserunt ipsam eum corrupti fugit quaerat libero vitae
        velit assumenda non, eius voluptatem quasi quis a laboriosam minima
        cumque nemo esse, laborum provident sunt. Natus!
      </p>
    </div>
  );
}
