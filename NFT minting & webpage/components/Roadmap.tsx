import { Button } from "@material-ui/core";
import { CollectionsOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Button1 } from './button'
import {PythonShell} from 'python-shell';



const Container = styled("div")`
    width: 100vw;
    height: auto;
    margin-top: 100px;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MyButton = styled(Button)`
    width: 100%;
    height: 60px;
    margin-top: 10px;
    margin-bottom: 5px;
    background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

const ListItem = styled("li")`
    margin: 10px;
`

function MintingNFT(){

var delayInMilliseconds = 5000; 
setTimeout(function() {
    alert("Your New NFT Has Been Minted");
}, delayInMilliseconds);
    
const spawn = require('child_process').spawn;

const process = spawn('python', ['./mintNFT.py']);

process.stdout.on('data', (data: { toString: () => any; }) =>{
    console.log(data.toString());
});

}


const Roadmap = () => {
    return (
        
        <Container>
            <h1>Information and Minting</h1>
            <ul style={{padding: "0 20%"}}>
                <ListItem>
                    This is the original NFT collection for SpaceThusiasts.
                </ListItem>
                <ListItem>
                    We made this colection to spread the word about our website and provide you the visitors with an interesting oppertunity.
                </ListItem>

                <ListItem>
                How does Minting work: The process is essentially boiled down to deciding where and how you want to do it, hooking some tools (your digital wallet and a blockchain network) together, and then hitting the “mint” button.

                
                </ListItem>
                <ListItem>
                While each potential NFT minter will have their own reasons, there are generally a few benefits to getting an NFT:

                 Democratize ownership: Getting an NFT allows numerous parties to own a stake in the digital asset.

                
                </ListItem>
                <ListItem>
                 Sell unique digital assets: Not only can you trade, buy, or sell stakes in assets, it’s possible that in the future artists might even receive a cut of the sales.
                </ListItem>
                <ListItem>
                 Store and preserve value: You can store the asset’s value in a tangible way — similar to how a physical coin can be minted with a specific precious metal concentration. Plus, preserving value digitally is generally considered safe, thanks to the security of the blockchain and the built-in scarcity of NFTs.
                </ListItem>

                <MyButton onClick={async () => {MintingNFT()}}>
                    Mint a Random NFT
                    
                </MyButton>

            </ul>
        </Container>


    )
}



export default Roadmap;