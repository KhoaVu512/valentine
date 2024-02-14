import Image from 'next/image'

export default function Home() {
  return (
    <main className="container">
      <img
        className="cat-img"
        src="static/cat-0.jpg"
        alt="Picture of a cat"
      />
      <p className="title">Will you be my Valentine?</p>
      <div className="buttons">
        <button
          type="button"
          className="btn btn--yes"
        >
          Yes
        </button>
        <button
          type="button"
          className="btn btn--no"
        >
          No
        </button>
      </div>
    </main>
  )
}
