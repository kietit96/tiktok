import AccountItem from "@layoutcomps/Account";
import { default as WrapperAccount } from "@layoutcomps/Account/wrapper";
import SearchItem from "@layoutcomps/Search";
import { default as WrapperPopper } from "@layoutcomps/Search/wrapper";
export default function SearchPopper() {
  return (
    <>
      <WrapperPopper>
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </WrapperPopper>
      <WrapperAccount>
        <AccountItem />
        <AccountItem />
        <AccountItem />
      </WrapperAccount >
    </>
  )
}
