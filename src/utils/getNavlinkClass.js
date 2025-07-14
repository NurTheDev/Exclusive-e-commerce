const getNavlinkClass = ({isActive}) => {
    return `normal-text transition-colors ${
        isActive ? 'text-secondary2 font-semibold' : 'hover:text-blue-600'
    }`
}
export default getNavlinkClass
