import logo from '../../../assets/logo.jpeg'
import quality from '../../../assets/percent.png'
import user from '../../../assets/users.png'
import frame from '../../../assets/frame.png'
import report from '../../../assets/dashboard.png'
import attendence from '../../../assets/attendance.png'

const Sidenav = () => {
    const sideMenus = [{title: "Student Management", img: user},{title: "Financial Management", img: frame},{title: "Quality Control", img: quality},{title: "Report Delivery", img: report},{title: "Attendence", img: attendence}]
    return (
        <>
        <section className="bg-blue-600 h-screen text-white px-2 py-3 hidden md:flex flex-col items-center justify-between">
            <img src={logo} alt="HICET logo" className='rounded-full w-1/2'/>
            <div className='side-menus-wrapper my-10 flex flex-col gap-5'>
                {sideMenus?.map(menu => {
                    return (
                        <div className='side-menu flex flex-col gap-2'>
                            <div className="side-menu-icon flex justify-center">
                                <img src={menu?.img} alt={sideMenus.title+" icon"} className='w-[48px] h-[48px]'/>
                            </div>
                            <div className="side-menu-body">
                                <h4 className='text-md text-center'>{menu?.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Sidenav;