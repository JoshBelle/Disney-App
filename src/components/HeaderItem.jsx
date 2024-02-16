const HeaderItem = ({name, Icon}) => {

  return (
    <div className=" mb-2 flex items-center gap-3 text-white text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8">
        <Icon/>
        <h2 className="">{name}</h2>
    </div>
  )
}

export default HeaderItem
