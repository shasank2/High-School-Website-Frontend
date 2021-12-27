import Card from "./Card";
import { ObjectCard } from "./ObjectCard/ObjectCard";

const CardHolder = () => {
    return (
        <>
            <div className="flex justify-items-center m-1 grid lg:grid-cols-6 gap-8 md:grid-cols-3 sm:grid-cols-2">
                {
                    ObjectCard.map(elem => (
                        <div key={elem.id}>
                            <Card ObjectCard={elem} />
                        </div>
                    )
                    )
                }
            </div>
        </>
    )
}

export default CardHolder;