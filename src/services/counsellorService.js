const Counsellor = require('../models/counsellor');

class CounellorService {
     getCounsellor = async(data)=>{
        try {
            const counsellor = await Counsellor.find(data);
            return counsellor;

        } catch (error) {
            throw new Error(error);
        }
     }
}