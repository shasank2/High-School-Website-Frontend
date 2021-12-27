const StatisticData = (props:any) => {
    return (
        <>
            <div className="font-bold text-yellow-300">
                <p className="text-3xl text-center">{props.StatisticObject.value}</p>
                <br /><br />
                <p className="overline decoration-2 overline-slate-500">{props.StatisticObject.info}</p>
            </div>
        </>
    )
}

export default StatisticData