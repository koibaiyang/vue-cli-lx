<template>
    <div>
        <p>cs1</p>
        <p>{{username}}</p>
        <p>{{age}}</p>
        <button @click="cn">改变</button>
    </div>
</template>

    <script>
        export default{
            data(){
                return {
                    username: 'admin',
                    age: 18
                }
            },
            methods: {
                cn(){
                    console.log('cn');
                    console.log(this);
                    this.username = '改变的名字'

                }
            }
        }
    </script>
<style lang='less'>
    div {
        background-color: pink;
        text-align: center;
        button {
            background-color: skyblue;
            border: none;
        }
    }
</style>