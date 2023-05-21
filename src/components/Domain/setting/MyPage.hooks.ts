import { useHeader } from "@/components/App/AppHeader/HeaderContent/HeaderContent.hooks"
import { useNavigation } from "@/util/hooks/useNavigation";
import { useEffect } from "react";


export const useSettingHeader = () => {
  const {headerContent, setHeaderContent} = useHeader()
  const { getCurrentPath} = useNavigation()



  useEffect(() => {
    if(!getCurrentPath().split('/')[2]){
      setHeaderContent({
        title: '설정',
        description: '다양한 옵션을 마음대로 커스터마이징 하세요!',
        backward:{
          visible:true,
          historyStack:[]
        }
      })
    }

  }, []);





}