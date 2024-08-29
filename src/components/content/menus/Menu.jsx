import enrollment from "../../../assets/add-user.png"
import reEnrollment from "../../../assets/open-book.png"
import club from "../../../assets/golf-club.png"
import attendence from '../../../assets/attendant-list.png'
import email from '../../../assets/email.png'
import classRoom from '../../../assets/classroom.png'
import clinic from '../../../assets/hospital.png'

const Menu = () => {
    const menuList = [ {title: "Regular Enrollment", img: enrollment}, {title: "Remedial Enrollement", img: reEnrollment}, {title: "Club Management", img: club}, {title: "Attendence", img: attendence}, {title:"SMS/Email", img: email}, {title:"Classroom Mangagement", img: classRoom},{title:"Clinic", img: clinic}]
    return (
        <>
        <section className="p-5 lg:px-16">
            <h4 className="text-center text-xl font-semibold">Menus</h4>
            <div className="menu-card-wrapper my-3 flex justify-center gap-5 flex-wrap">
                {menuList?.map((menu) => {
                    return (
                        <div className="menu-card border border-blue-900 w-1/3 md:w-1/5 lg:w-1/6 p-4 rounded-md flex flex-col items-center justify-between gap-5 hover:bg-gray-200 tranisition">
                            <div className="menu-card-img">
                                <img src={menu.img} alt={menu.title+" icon"} />
                            </div>
                            <div className="menu-card-body">
                                <h3 className="menu-card-title text-xl font-semibold text-blue-800 text-center">{menu?.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Menu;