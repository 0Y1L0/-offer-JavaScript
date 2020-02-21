function replaceSpace(str)
{
    // write code here
    // const strArray = str.split(' ')
    // return strArray.join('%20')
    
    return str.replace(/\s/g, '%20')
}