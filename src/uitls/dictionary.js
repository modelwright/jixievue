import {searchDictionary} from '@/api/Dictionary';

export function getDictionary(dictionary,data) {
    for(let i in dictionary) {
        searchDictionary(dictionary[i].id).then(res => {
            let pathArray = dictionary[i].path.split(".");
            let path = data;
            for (let i in pathArray) {
                path = path[pathArray[i]];
            }
            data.$set(path,'option',path.option.concat(res.data));
        }).catch(err => {
            console.log(err);
            data.$message({
                type: 'error',
                message: '数据字典查询失败'
            });
        })
    }
}