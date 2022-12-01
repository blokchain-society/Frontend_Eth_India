import Card from "./Cards";

const cardsInfo = [
  {
      header:"Empower",
      content:"MetaBorrow is a blockchain-based Gaming NFT lending and borrowing platform powered by Polygon Network."
  },
  {
      header:"Excel",
      content:"Lender claims the collateral along with full rent payment gets sent to the lender"
  },
  {
      header:"Excite",
      content:"Unused rent amounts + collateral gets returned to the renter NFT(s) is/are returned to the lender "
  },

]

export default function CardsWrapper() {
  return (
    <div className="grid p-12 place-content-center sm:grid-cols-3">
     {
       cardsInfo.map( el => {
         return(<>
          <Card header={el.header} content = {el.content} key={el.header} />
         </>)
       }
         
       )
     }
    </div>
  );
}
