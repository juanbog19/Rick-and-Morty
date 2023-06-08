import Card from '../Card/Card';
import style from "./Cards.modules.css"

export default function Cards({characters, onClose}) {
   return (
      
      <div className={style.container}>
         { characters.map (({id, name, specie, gender, image, origin, status}) => (
            <Card
            key={id}
            id={id}
            name={name}
            species={specie}
            gender={gender}
            image={image}
            origin={origin.name}
            status={status}
            onClose={onClose}
            />
         ))}
      </div>
   );
}
