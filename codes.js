module.exports = {
    answers: [
        `#include<bits/stdc++.h>
        using namespace std;

        int main(){
            
            int no_of_elements;
            cin>>no_of_elements;
            vector<int> arr(no_of_elements);
            int sum_of_elements = 0;

            for(int i = 0; i < no_of_elements; i++){
                cin>>arr[i];
                sum_of_elements+=arr[i];
            }

            cout<<sum_of_elements;
            return 0;

        }`
    ,
    `#include <bits/stdc++.h>

    template<typename T> T gcd(T a, T b) {
        if(!b) return a;
        return gcd(b, a % b);
    }
    template<typename T> T lcm(T a, T b) {
        return a * b / gcd(a, b);
    }
    
    template<typename T> void chmin(T& a, T b) { a = (a > b) ? b : a; }
    template<typename T> void chmax(T& a, T b) { a = (a < b) ? b : a; }
    int in() { int x; scanf("%d", &x); return x; }
    
    using namespace std;
    
    #ifdef ONLINE_JUDGE
    #define debug(args...)
    #else
    #define debug(args...) fprintf(stderr,args)
    #endif
    
    typedef long long Int;
    typedef unsigned long long uInt;
    typedef unsigned uint;
    
    int A[5], B[5];
    
    int main(void) {
        int ia = 0;
        int ib = 0;
        
        for (int i = 0; i < 3; i++) {
            cin >> A[i];
        }
        for (int i = 0; i < 3; i++) {
            cin >> B[i];
    
            if (A[i] < B[i]) {
                ib += 1;
            } else if (A[i] > B[i]) {
                ia += 1;
            }
        }
    
        cout << ia << " " << ib ;
        return 0;
    }`
    
    ]
}

