import { useState } from 'react'
import './App.css'


function App() {
  const MenuItem = ({name, price}) => {
     return (
      <div className="menu-item">
        <span>{name}</span>
        <span>{price}</span>
      </div>
   );
  }; 

 const MenuSection = ({ title, items}) => {
   return (
     <div className="menu-section">
       <h3>{title}</h3>
       {items.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price}/>
      ))}
     </div>
   );
 };

  const SpecialityItem = ({image, name, description, price}) => {
    return (
      <div className="speciality-item">
        <img src={image} alt="" />
        <span>{name}</span>
        <span>{price}</span>
        <p>{description}</p>
        
      </div>
    );
  };

  const TeamItem = ({image, name, poste, description}) =>{
    return (
      <div className="team-item">
        <img src={image} alt=""/>
        <span>{name}</span>
        <span>{poste}</span>
        <p>{description}</p>
      </div>
    );
  };

  const entrees = [
    { name: "Carpaccio de Boeuf", price: "€62"},
    { name: " Salade burata", price: "€10"},
    { name: "Tartare de saumon", price: "€14"},
    { name: "Velouté de potiron", price: "€9"}
];
  
  const plats = [
    { name: "Filet de Boeuf", price: "€24"},
    { name: "Risoto aux champignons", price: "€19"},
    { name: "Cabillaud à la Provence", price: "€22"},
    { name: "Magret de Canard", price: "€23"}
];

  const desserts = [
    { name: "Fondant au chocolat ", price: "€8"},
    { name: " Tarte aux fruits ", price: "€7"},
    { name: "Crème Brulée", price: "€9"},
    { name: "Profiteroles maison", price: "€8"}
];

  const specialitys = [
  { image: "/src/assets/pate.png", name: "pate", description: "Délicieuse pizza", price: "€23" },
  { image: "/src/assets/purée_steak.png", name: "purée_steak", description: " Risotto  crémeux, aux saint jacques saucées opeaux de parmesan", price: "€29" },
  { image: "/src/assets/saumon.png", name: "saumon", description: " Loup de mer en croute d'herbes, léqumes rotis, sauce vierge", price: "€26" }
];

  const team = [
  { image: "/src/assets/jean Dupont .png", name:" Jean Dupont", poste: "Chef Exécutif", description:"20 ans d'experience dans les cuisines étoilées." },
  { image: "/src/assets/sophie Martin.png", name:" Sophie Martin", poste: "Cheff Patissière", description:"Passionée par la cr&ation de desserts d'esception." },
  { image: "/src/assets/Marco Rossi.png", name:"Marco Rossi", poste: "Sous-Chef", description:"Expert en cuisine italienne et produits de la mer." },
  { image: "/src/assets/Xiu Ping.png", name:"Claire Bernaud", poste: "Cheffe de Partie ", description:"Spélaste des entrées et des saveurs végétales." }
];

   return (
    <>
      <section id="présentation">
        <h1>Une Experience Culinaire Unique </h1>
        <p>Découvre une cuisine raffinée, préparee avec passion à partir de produits frais et de saison </p>
      </section>

    
        <div id="menu">
          <h2>Notre Menu</h2>
           <div className="menu-grid">
            <MenuSection title="Entrées" items={entrees}/>
            <MenuSection title="Plats" items={plats}/>
            <MenuSection title="Desserts" items={desserts}/>
           </div>
        </div> 
      

      <div id="specialities">
        <h2>Nos Spécialités</h2>
        <div className="specialities-grid">
           {specialitys.map((item, index) => (
             <SpecialityItem
               key={index}
               image={item.image}
               name={item.name}
               description={item.description}
               price={item.price}
             />
          ))}
       </div>
      </div>

        <div id="team">
          <h2>Notre Equipe</h2>
          <div className="team-grid">
            {team.map((item, index) => (
             <TeamItem
                key={index}
                image={item.image}
                name={item.name}
                poste={item.poste}
                description={item.description}
             />
            ))}

          </div>

      </div>
    </>
 )

 }




export default App
