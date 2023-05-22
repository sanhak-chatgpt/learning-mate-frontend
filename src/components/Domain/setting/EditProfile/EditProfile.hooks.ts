import { useHeader } from "@/components/App/AppHeader/HeaderContent";
import { useModalContext } from "@/components/UI/Modal/Modal.hooks";
import { userState } from "@/states/state.user";
import { UserControllerApi } from "@/util/Api";
import { BaseError } from "@/util/models/Error";
import { FormEventHandler, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";


export const useEditProfile = () => {
  const {setHeaderContent} =useHeader()
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useRecoilState(userState)
  const {openModal} = useModalContext()

  useEffect(() => {
    setHeaderContent({
      title:'프로필 수정',
      description:'타인에게 보여질 내 프로필 정보를 수정해 보세요!',
      backward:{
        visible:true,
        historyStack:[]
      }
    })
  }, []);

  const handleNameSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try{
      const api = new UserControllerApi()
      if(!!nameInputRef.current){
        const res = await api.updateUserNickname({userDtoNickName:{name:nameInputRef.current.value}})
        setUser({
          name:nameInputRef.current.value
        })
        openModal({
          type:'Basic',
          props:{
            title:'닉네임 변경 성공!',
          },
          events:{
            onClose:()=>{
              if(!!nameInputRef.current) {
                nameInputRef.current.value = ''
              }
            }
          }
        })
      }
      else{
        throw new BaseError('닉네임 변경 오류')
      }
    } catch(e){

      openModal({
        type:'Basic',
        props:{
          title:'닉네임 변경 도중 오류가 발생했습니다',
          description:'다시 시도해주세요.'
        },
        events:{
          onClose:()=>{
            if(!!nameInputRef.current) {
              nameInputRef.current.value = ''
            }
          }
        }
      })

    }

  }

  return {
    nameInputRef,
    handleNameSubmit,
  }
}