import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputText from "../components/input";
import InputCheckbox from "../components/input-checkbox";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";       

export default function PageComponents() {
    return (
        <Container>
        <div className="grid gap-5">
            <div className="flex flex-col gap-2">
            <Text variant="body-sm-bold" className="text-pink-base">
                Hello Vite + React!
                </Text>
            <Text className="text-green-base">
                Hello Vite + React!
                </Text>
            <Text variant="body-md-bold">
                Hello Vite + React!
                </Text>                
            </div>

            <div className="flex gap-1">
                <Icon svg={TrashIcon} className='fill-green-base'/>
                <Icon svg={CheckIcon} className='fill-pink-base'/>
                <Icon svg={PencilIcon} className='fill-pink-base'/>
                <Icon svg={SpinnerIcon} animate/>
            </div>

            <div className="flex gap-1">
                <Badge variant="secondary">5</Badge>
                <Badge variant="primary">2 de 5</Badge>
                <Badge loading>5</Badge>
            </div>

            <div className="flex gap-1">
                <Button icon={PlusIcon}>Nova Tarefa</Button>
                <Button icon={PlusIcon} handling>Criando</Button>
            </div>

            <div className="flex gap-1">
                <ButtonIcon icon={TrashIcon}/>
                <ButtonIcon icon={TrashIcon} variant="secondary"/>
                <ButtonIcon icon={TrashIcon} variant="tertiary"/>
                <ButtonIcon icon={TrashIcon} loading/>
                <ButtonIcon icon={TrashIcon} handling/>
            </div>

            <div>
            <InputText />
            </div>

            <div>
            <InputCheckbox/>
            <InputCheckbox loading/>
            </div>

            <div>
            <Card size="md">Olá Mundo</Card>
            </div>

            <div className="space-y-2">
            <Skeleton className='h-6'/>    
            <Skeleton className='h-6'/>    
            <Skeleton className="w-96 h-6"/>    
            </div>

        </div>
        </Container>
  )
}