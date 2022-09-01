import { AccountModel } from "../../domain/models/account";
import { AddAccountModel } from "./usecases/add-account";

export interface AddAccountRepository {
	add(accountData: AddAccountModel): Promise<AccountModel>;
}
