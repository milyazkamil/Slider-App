import { BiSolidQuoteRight } from "react-icons/bi";

const MainContent = ({ people, currentPerson }) => {
  return (
    <>
      <section className="main-content">
        {
          people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            return (
              <article
                key={id}
                className="single-person"
                style={{
                  transform: `translateX(${
                    100 * (personIndex - currentPerson)
                  }%)`,
                  opacity: personIndex === currentPerson ? 1 : 0,
                  visibility: personIndex === currentPerson ? "visible" : "hidden",
                }}
              >
                <img className="person-image" src={image} alt={name} />
                <h3 className="person-name">{name}</h3>
                <h4 className="person-job">{title}</h4>
                <p className="person-desc">{quote}</p>
                <BiSolidQuoteRight className="icon" />
              </article>
            )
          })
        }
      </section>
    </>
  )
}
export default MainContent;