import StatisticData from "./StatisticData";
import { StatisticObject } from "./StatisticObject/StatisticObject";

const Statistic = () => {
    return (
        <>
            <div className="w-full min-h-[16rem] max-h-fit bg-cover bg-fixed flex lg:flex-row items-center justify-center sm:flex-col lg:space-x-[12rem]" style={{ backgroundImage: "linear-gradient(rgba(135, 80, 156, 0.9),rgba(135, 80, 156, 0.9)),url(/Durbar_High_School.jpg)"}}>
                {
                    StatisticObject.map(elem => (
                        <div key={elem.id}>
                            <StatisticData StatisticObject={elem} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Statistic;