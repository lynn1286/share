/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export' // 静态导出，脱离服务器，如果有页面在使用 getServerSideProps 则报错 https://nextjs.org/docs/messages/gssp-export
}

export default nextConfig
