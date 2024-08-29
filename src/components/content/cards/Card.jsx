import Teacher from '../../../assets/school.png'
import Student from '../../../assets/student.png'
import Club from '../../../assets/group.png'

const Card = () => {
    return (
        <>
        <section className="px-5 lg:px-16 py-5 flex gap-5 justify-center flex-wrap">
            <div className="card flex py-3 px-4 w-full md:w-1/3 lg:w-1/4 border border-red-100 rounded-lg bg-red-100 hover:bg-red-200 transition hover:cursor-pointer justify-between">
                <div className="card-img flex justify-center items-center">
                    <img src={Teacher} alt="Teacher icon" className='h-2/3'/>
                </div>
                <div className="card-body flex flex-col pe-5 gap-5 w-2/3 justify-between">
                    <h2 className="count text-4xl font-bold text-right">50</h2>
                    <p className="card-body text-right text-xl font-semibold">Teachers</p>
                </div>
            </div>
            <div className="card flex py-3 px-4 w-full md:w-1/3 lg:w-1/4 border border-red-100 rounded-lg bg-red-100 hover:bg-red-200 transition hover:cursor-pointer justify-between">
                <div className="card-img flex justify-center items-center">
                    <img src={Student} alt="Student icon" className='h-2/3'/>
                </div>
                <div className="card-body flex flex-col pe-5 gap-5 w-2/3 justify-between">
                    <h2 className="count text-4xl font-bold text-right">88</h2>
                    <p className="card-body text-right text-xl font-semibold">Students</p>
                </div>
            </div>
            <div className="card flex py-3 px-4 w-full md:w-1/3 lg:w-1/4 border border-red-100 rounded-lg bg-red-100 hover:bg-red-200 transition hover:cursor-pointer justify-between">
                <div className="card-img flex justify-center items-center">
                    <img src={Club} alt="In paid Club icon" className='h-2/3'/>
                </div>
                <div className="card-body flex flex-col pe-5 gap-5 w-2/3 justify-between">
                    <h2 className="count text-4xl font-semibold text-right">12</h2>
                    <p className="card-body text-right text-xl font-semibold">In Paid Club</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Card;