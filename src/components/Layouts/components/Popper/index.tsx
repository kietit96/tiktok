import AccountItem from "./Account";
import { default as WrapperAccount } from "./Account/wrapper";
import { default as WrapperPopper } from "./Searchs/wrapper";
import SearchItem from "./Searchs";
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
